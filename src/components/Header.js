import React from 'react'
import {Button} from 'antd'
import * as util from '../utils/fetch'
const Header = ({title})=> {
  return (
    <div>
      <p className='header'>{title}</p>
    </div>
  )
}

export default Header
