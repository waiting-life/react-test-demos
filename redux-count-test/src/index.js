import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// import Lg from './Lg'

import store from './redux/store'

ReactDOM.render(<App/>,document.querySelector('#root'))

store.subscribe(() => {
  ReactDOM.render(<App/>,document.querySelector('#root'))
})





// 自定义组件必须大写