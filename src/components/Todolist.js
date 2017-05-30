import React, {Component} from 'react'
import {Table, Button, Input} from 'antd'
import CollectionCreateForm from './CollectionCreateForm'
// import CollectionsPage from './CollectionsPage'
const {Search} = Input

export default class TodoList extends Component {
  constructor(props) {
    super(props)
  }
  state = {
    visible: false,
    editor: null,
  }
  showModal = () => {
    this.setState({ visible: true })
  }
  handleCancel = () => {
    this.setState({ visible: false,editor: null })
  }
  handleOK = () => {
    const form = this.form
    const {allActions} = this.props
    form.validateFields((err, values) => {
      if (err) {
        return
      }
      if (this.state.editor) {
        console.log( this.state.editor )
        console.log( values )
        allActions.update_todo(Object.assign({}, this.state.editor, values))
      } else {
        allActions.save_todo(values)
      }
      form.resetFields()
      this.setState({ visible: false,editor: null })
    })
  }
  saveFormRef = (form) => {
    this.form = form
  }

  render() {
    const {state, allActions} = this.props

    const columns = [{
      title: '技能',
      dataIndex: 'skill',
      key: 'skill',
      width: '25%',
    }, {
      title: '熟练度',
      dataIndex: 'proficiency',
      key: 'proficiency',
      width: '25%',
    }, {
      title: '使用年限',
      dataIndex: 'serLife',
      key: 'serLife',
      width: '25%',
    }, {
      title: '操作',
      render: (item) => (
      <span>
        <Button onClick={()=>this.setState({visible: true,editor: item})}>编辑</Button>
        <Button icon="delete" type="danger"  onClick={()=>allActions.remove_todo(item._id)}></Button>
      </span>
      ),
      width: '25%',
    }];

    return (
      <div className='content'>
        <Search
          placeholder="要不要搜一下技能"
          className='search'
          onSearch={
            key => {
              allActions.search_todo(key)
            }
          }
        />
        <Button
          icon='reload'
          type='primary'
          style={{
            backgroundColor: '#79E3D8',
            borderColor: '#79E3D8',
            width:'50%',
            marginBottom: 5,
            marginTop: 5
          }}
          onClick={allActions.getAll}
        />
        <Button
          icon='plus'
          type='primary'
          style={{
            backgroundColor: '#98EB2C',
            borderColor: '#98EB2C',
            width:'50%',
            marginBottom: 5,
            marginTop: 5
          }}
          onClick={this.showModal}
        />
        <CollectionCreateForm
          ref={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleOK}
          editor={this.state.editor}
        />
        <Table
          rowKey="_id"
          columns={columns}
          dataSource={state}
          pagination={false}
          size='small'
        />
      </div>
    )
  }
}