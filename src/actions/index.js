import * as allTypes from '../consts'
import * as utils from '../utils/fetch'

export function update_all(items) {
  return {
    type: allTypes.UPDATE_ALL,
    items
  }
}

export function update(items) {
  return {
    type: allTypes.UPDATE_TODO,
    items
  }
}

export function remove(items) {
  return {
    type: allTypes.REMOVE_TODO,
    items
  }
}

export function save(items) {
  return {
    type: allTypes.ADD_TODO,
    items
  }
}

export function search(item) {
  return {
    type: allTypes.SEARCH_TODO,
    item
  }
}

/*export function getAll() {
  return new Promise((resolve) => {
    resolve([])
  });
}

export function ActionTest(a) {
  return dispatch => {
    getAll()
      .then(()=>console.log( a ))
      .then(()=>dispatch(add()))
      .then(()=>console.log( a ))
  }
}*/
// 初次加载
export function getAll() {
  return dispatch =>{
    utils.getAll()
      .then(res=> {
        dispatch(update_all(res))
      })
    }
}

export function remove_todo(id) {
  return dispatch =>{
    utils.remove(id)
      .then(()=> utils.getAll())
      .then(res=> {
        dispatch(remove(res))
      })
  }
}

export function save_todo(skill) {
  return dispatch =>{
    utils.save(skill)
      .then(()=> utils.getAll())
      .then(res=> {
        dispatch(save(res))
      })
  }
}


export function search_todo(key) {
  return dispatch =>{
    utils.search(key)
      .then(res=> {
        dispatch(search(res))
      })
  }
}

export function update_todo(newSkill) {
  return dispatch =>{
    utils.update(newSkill)
      .then(()=> utils.getAll())
      .then(res=> {
        dispatch(update(res))
      })
  }
}