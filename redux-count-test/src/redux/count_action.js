/**
 * 该文件专门为Count组件生成action对象
 */
import {INCREMENT, DECREMENT} from './constant'

// 同步action, 返回一个一般对象
export const increment = payload => ({ type: INCREMENT, payload })
export const decrement = payload => ({ type: DECREMENT, payload})

// 异步action， 返回一个函数，异步action中一般会调用同步action， 异步action不是必须要用的
export const incrementAsync = (payload, delay) => {
  // 交给store去调用， 默认会带个dispatch参数
  return dispatch => {
    setTimeout(() => {
      // 交给store去调用
      dispatch(increment(payload))
    }, delay);
  }
}