import {INCREMENT, DECREMENT} from '../constant'
export default function countReducer (preState = 0, action) {
  const {type, payload} = action
  switch (type) {
    case INCREMENT:
      return preState + payload
    case DECREMENT:
      return preState - payload
    default:
      return preState
  }
} 