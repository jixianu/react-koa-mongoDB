// 工具集
export function getAll() {
  return fetch('/api/', {
    method: 'GET'
  }).then(
    res=>res.json()
  ).catch((e)=> {
      console.log(e)
    }
  )
}

export function search(key) {
  return fetch('/api/' + key, {
    method: 'GET'
  }).then(
    res=>res.json()
  ).catch((e)=> {
      console.log(e)
    }
  )
}

export function save(skill) {
  console.log( skill )
  return fetch('/api/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(skill)
  }).then(
    res=>res.text()
  ).catch((e)=> {
      console.log(e)
    }
  )
}

export function update(skill) {
  return fetch('/api/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(skill)
  }).then(
    res=>res.text()
  ).catch((e)=> {
      console.log(e)
    }
  )
}

export function remove(id) {
  return fetch('/api/' + id, {
    method: 'DELETE'
  }).then(
    res=>res.text()
  ).catch((e)=> {
      console.log(e)
    }
  )
}
