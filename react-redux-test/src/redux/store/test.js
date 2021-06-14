import { combineReducers, createStore } from 'redux'

const reducer = (state = {
  name: 'www',
  age: 20,
}, action) => {
  if (action.type === 'asc') {
    return state + action.payload
  } else if (action.type === 'desc') {
    return state - action.payload
  } else {
    return state 
  }
}

// const reducer1 = (state = 'www') => {}
// const reduer2 = (state = 20) => {}
// const reducer = combineReducers(reducer1, reducer2)

export const store = createStore(reducer)


