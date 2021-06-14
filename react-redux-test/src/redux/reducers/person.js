import {ADD_PERSON} from '../constant'

const initState = [{id: '001', name: 'cpp', age: 2}]
export default function personReducer (preState = initState, action) {
  const {type, payload} = action
  switch (type) {
    case ADD_PERSON:
      return [payload, ...preState]
  
    default:
      return preState
  }
}