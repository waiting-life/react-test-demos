const { createStore } = require('redux')

const reducer = (state = 200, action) => {
  if (action.type === 'add') {
    return state + action.payload
  }
  else if (action.type === 'desc') {
    return state - action.payload
  }
  else {
    return state
  }
}

const store = createStore(reducer)

// console.log(
//   store.getState()
// );




const createStore = (reducer) => {

    let state

    const getState = () => state

    const dispatch = (action) => {
        state = reducer(state, action)
        return action
    }

    dispatch({})

    return {
        getState,
        dispatch,
    }
}
