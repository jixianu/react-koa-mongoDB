import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import 'antd/dist/antd.min.css'
import './style'

// import configureStore from './config/configStore'
import configRouter from './config/configRouter'
import configureStore from './config/configStore'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    {configRouter}
  </Provider>,
  document.getElementById('app')
)