import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as allAction from '../actions'
import TodoList from '../components/TodoList'

class TodoContainer extends Component {
  componentWillMount(){
    this.props.allActions.getAll()
  }

  render() {
    return (
      <div>
        <TodoList
          state= {this.props.state}
          allActions = {this.props.allActions}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    state: state.todo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    allActions: bindActionCreators(allAction, dispatch)
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoContainer)