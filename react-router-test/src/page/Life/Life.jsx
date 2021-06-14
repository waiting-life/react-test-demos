import React, { useState } from 'react'
import ReactDOM from 'react-dom'

export default function Life() {
  const [opacity, setOpacity] = useState(1)
  // console.log(setOpacity);
  const death = () => {
    // 卸载组件
    // 函数式组件没有生命周期钩子和state
    // console.log(document.querySelector('.life'))
    ReactDOM.unmountComponentAtNode(document.querySelector('#root'))
  }
  const continueStudy = () => {
    
  }
  return (
    <div className="life">
      <h2 style={{opacity}}>React学不会怎么办？</h2>
      <button onClick={death}>不学了</button>
      <button onClick={continueStudy}>继续学</button>
    </div>
  )
}
