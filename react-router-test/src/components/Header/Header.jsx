import React from 'react'
import {withRouter} from 'react-router-dom'

 function Header(props) {
  // console.log('Header组件收到的props是', props)
  function back() {
    props.history.goBack()
  }
  function forward() {
    props.history.goForward()
  }
  return (
    <div>
      <h2>React Router Demo</h2>
      <button onClick={back}>回退</button>
      <button onClick={forward}>前进</button>
    </div>
  )
}

export default withRouter(Header)
