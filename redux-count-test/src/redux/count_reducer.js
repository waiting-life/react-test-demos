/*
  1. 该文件是用于创建一个专门为Count组件服务的reducer，reducer本身就是一个函数
  2. reducer函数会接受两个参数，分别为之前的状态(preState),动作对象(action)
*/
import {INCREMENT, DECREMENT} from './constant'
const initState = 0
export default function countReducer(preState = initState, action) {
  // 从action对象中获取type,payload
  console.log(preState, action)
  const {type, payload} = action
  switch (type) {
    case INCREMENT:
      return preState + payload
    case DECREMENT:
      return preState - payload
    default:
      return preState;
  }
}