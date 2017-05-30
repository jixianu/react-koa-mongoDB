import React, {Component} from 'react'
import CollectionCreateForm from './CollectionCreateForm'
import {Button} from 'antd'

export default class CollectionsPage extends Component {
  state = {
    visible: false,
  }
  showModal = () => {
    this.setState({ visible: true })
  }
  handleCancel = () => {
    this.setState({ visible: false })
  }
  handleCreate = () => {
    const form = this.form
    const {allActions} = this.props
    form.validateFields((err, values) => {
      if (err) {
        return
      }
      allActions.save_todo(values)
      form.resetFields()
      this.setState({ visible: false })
    })
  }
  saveFormRef = (form) => {
    this.form = form
  }
  render() {
    return (
      <div className='collectionsPage'>
        <Button
          icon='plus'
          type='primary'
          style={{
            backgroundColor: '#98EB2C',
            borderColor: '#98EB2C',
            float: 'right'
          }}
          onClick={this.showModal}
        />
        <CollectionCreateForm
          ref={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    )
  }
}
