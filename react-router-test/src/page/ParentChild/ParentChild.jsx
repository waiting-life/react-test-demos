import React, {useState,useEffect} from 'react'

export default function Parent(){
  const [lover, setLover] = useState({lovername: 'cpp', age: 2})
  useEffect(() => {
    console.log(1111, '组件挂载之后调用')
    return () => {
      console.log(2222, '组件卸载之后调用')
    }
  }, [])
  const changeLover = () => {
    let lover = {
      lovername: 'cjz',
      age: 22
    }
    setLover(lover)
  }
  return (
    <div>
      <h2>父组件</h2>
      <Child lover={lover}/>
      <button onClick={changeLover}>点击改变</button>
    </div>
  )
}

const Child = (props) => {
  const {lover} = props
  return (
    <div>
      <h3>子组件</h3>
      <div>{lover.lovername}</div>
      <div>{lover.age}</div>
    </div>
  )
}