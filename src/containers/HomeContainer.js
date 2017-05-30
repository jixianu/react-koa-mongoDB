import React, {Component} from 'react'
import {Link} from 'react-router'
import {Button} from 'antd'

export default class HomeContainer extends Component {
  render() {
    return (
        <Button type='primary'><Link to='/todoList'>GO技能列表页</Link></Button>
    )
  }
}
