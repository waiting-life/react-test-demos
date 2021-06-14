import React,{useState} from 'react'
import store from '../../redux/store'

// 引入actionCreator，专门用于创建action对象
import { increment, decrement, incrementAsync} from '../../redux/count_action'

export default function Count() {
  // const [count, setCount] = useState(0)
  const [value, setValue] = useState(2)


  // const [a, setA] = useState(0)
  // useEffect(() => {
  //   // 检测redux中的状态的变化，只要状态变化，就调用render
  //   store.subscribe((state) => {
  //     // setA(a => a + 1)
  //     setA(a + 1)
  //   })
  //   return () => {
  //     // store.unsubscribe()
  //   }
  // }, [a])

  // const myRef = React.createRef()


  const handleIncrement = () => {
    // 通知redux加value
    // store.dispatch({type: 'increment', payload: value*1})
    // setCount(count + value*1)

    store.dispatch(increment(value * 1))
  }
  const handleDecrement = () => {
    // store.dispatch({ type: 'decrement', payload: value * 1 })
    // setCount(count - value*1)

    store.dispatch(decrement(value * 1))
  }
  const incrementIfOdd = () => {
    const count = store.getState()
    if(count % 2 !== 0) {
      // store.dispatch({ type: 'increment', payload: value * 1 })
      store.dispatch(increment(value * 1))
      
    }
    // if(count % 2 !== 0) {
    //   setCount(count + value*1)
    // }
  }
  const handleIncrementAsync = () => {
    // setTimeout(() => {
    //   // setCount(count + value*1)
    //   // store.dispatch({ type: 'increment', payload: value * 1 })

    //   store.dispatch(increment(value * 1))
    // }, 2000);

    store.dispatch(incrementAsync(value * 1, 500))
  }

  const handleChange = (e) => {
    // console.log(e.target.value)
    // console.log(myRef)
    const {value} = e.target
    setValue(value*1)
    // setCount(value*1)
  }
  // const s = store.getState()
  // console.log(s);
  return (
    <div>
      <h1>当前求和为： {store.getState()}</h1>
      <select value={value} onChange={handleChange}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
      </select>&nbsp;
      <button onClick={handleIncrement}>+</button>&nbsp;
      <button onClick={handleDecrement}>-</button>&nbsp;
      <button onClick={incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
      <button onClick={handleIncrementAsync}>异步加</button>
    </div>
  )
}
