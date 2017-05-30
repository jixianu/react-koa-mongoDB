import * as allAction from '../actions';
import * as actionTypes from '../consts'
const initialState = []

export default function (state = initialState, action) {
    switch (action.type){
      case actionTypes.UPDATE_ALL:
        return action.items
      case actionTypes.ADD_TODO:
        return action.items
      case actionTypes.UPDATE_TODO:
        return action.items
      case actionTypes.REMOVE_TODO:
        return action.items
      case actionTypes.SEARCH_TODO:
        return action.item
      default:
        return state
    }
}
