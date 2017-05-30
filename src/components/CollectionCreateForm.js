import React from 'react'
import { Modal, Form, Input, Radio, InputNumber } from 'antd'

const FormItem = Form.Item
const RadioGroup = Radio.Group;

const CollectionCreateForm = Form.create()(
  (props) => {
    const { visible, onCancel, onCreate, form, editor} = props
    const { getFieldDecorator } = form
    const  toggleFlag = !Object.is(editor, null)
    return (
      <Modal
        visible={visible}
        title= {toggleFlag ? '修改技能' : "新技能"}
        okText="保存"
        onCancel={onCancel}
        onOk={onCreate}
      >
        <Form layout="vertical">
          <FormItem label="技能">
            {getFieldDecorator('skill', {
              rules: [{ required: true, message: '请输入一个新技能！' }],
              initialValue: (toggleFlag&&editor['skill']) || ''
            })(
              <Input />
            )}
          </FormItem>
          <FormItem label="熟练度">
            {getFieldDecorator('proficiency', {
              initialValue: (toggleFlag&&editor['proficiency']) || "精通",
            })(
              <RadioGroup>
                <Radio value="精通">精通</Radio>
                <Radio value="熟练">熟练</Radio>
                <Radio value="了解">了解</Radio>
              </RadioGroup>
            )}
          </FormItem>
          <FormItem className="collection-create-form_last-form-item">
            {getFieldDecorator('serLife', {
              initialValue: (toggleFlag&&editor['serLife']) || 1
            })(
              <InputNumber min={1} max={10} />
              )}
          </FormItem>
        </Form>
      </Modal>
    )
  }
)

export default CollectionCreateForm
