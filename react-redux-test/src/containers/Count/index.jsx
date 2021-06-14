import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement} from '../../redux/actions/count'

export default function  Count() {
  const [value, setValue] = useState(2)

  const state = useSelector(state => state)
  const {count, persons} = state

  const dispatch = useDispatch()
  const handleChange = (e) => {
    setValue(e.target.value)
  }
  const handleIncrement = () => {
    dispatch(increment(value * 1))
  }
  const handleDecrement = () => {
    dispatch(decrement(value * 1))
  }
  const handleIncrementIfOdd = () => {
    if (count % 2 !== 0) {
      dispatch(increment(value * 1))
    }
  }
  const handleIncrementAsync = () => {
    setTimeout(() => {
      dispatch(increment(value * 1))
    }, 2000);
  }
  return (
    <div>
      <h2>我是Count组件</h2>
      <h3>下方Person组件总人数为: {persons.length}</h3>
      <select onChange={handleChange} value={value}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <h2>count: {state.count}</h2>
      <button onClick={handleIncrement}>加</button>&nbsp;
      <button onClick={handleDecrement}>减</button>&nbsp;
      <button onClick={handleIncrementIfOdd}>当前值为奇数时加</button>&nbsp;
      <button onClick={handleIncrementAsync}>异步加</button>
    </div>
  )
}
