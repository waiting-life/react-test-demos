import {INCREMENT, DECREMENT} from '../constant'

export const increment = payload => ({type: INCREMENT, payload})
export const decrement = payload => ({type: DECREMENT, payload}) 
