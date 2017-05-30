import React from 'react'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import AppContainer from '../containers/AppContainer'
import TodoContainer from '../containers/TodoContainer'
import HomeContainer from '../containers/HomeContainer'

const RootRoter = (
  <Router history={ hashHistory }>
    <Route path="/" component={ AppContainer }>
      <IndexRoute component={HomeContainer} />
      <Route path="todoList" component={ TodoContainer }/>
    </Route>
  </Router>
)
export default RootRoter