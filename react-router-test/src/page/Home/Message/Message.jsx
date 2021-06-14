import React from 'react'
import {Link, Route} from 'react-router-dom'

import Detail from './Detail/Detail'
export default function Message(props) {
  let messageArr = [
    {
      id: '01', 
      title: '消息1'
    },
    {
      id: '02',
      title: '消息2'
    },
    {
      id: '03',
      title: '消息3'
    }
  ]
  function pushShow(id, title) {
    // push携带跳转,携带params参数
    // props.history.push(`/home/message/detail/${id}/${title}`)

    // push跳转,携带search参数
    // props.history.push(`/home/message/detail/?id=${id}&title=${title}`)

    // push跳转, 携带state参数  push(pathname, state)
    props.history.push('/home/message/detail', {id, title})
  }
  function replaceShow(id, title) {
    // replace跳转,携带params参数
    // props.history.replace(`/home/message/detail/${id}/${title}`)

    // replace跳转,携带search参数
    // props.history.replace(`/home/message/detail/?id=${id}&title=${title}`)

    // replace跳转, 携带state参数  replace(pathname, state)
    props.history.replace('/home/message/detail', { id, title })
  }
  return (
    <div>
      <h3>Messsage组件</h3>
      <ul>
        {
          messageArr.map(msgObj => {
            const {id, title} = msgObj
            return (
              <li key={msgObj.id}>
                {/* 向路由组件传递params参数 */}
                {/* <Link to={`/home/message/detail/${id}/${title}`}>{title}</Link> */}

                {/* 向路由组件传递search参数 */}
                {/* <Link to={`/home/message/detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */}

                {/* 向路由组件传递state参数 */}
                <Link to={{ pathname: '/home/message/detail', state: {id: msgObj.id, title: msgObj.title}}}>{msgObj.title}</Link>
                <button onClick={() => pushShow(id, title)}>push查看</button>
                <button onClick={() => replaceShow(id, title)}>replace查看</button>
              </li>
            )
          })
        }
      </ul>
      {/* 声明接收params参数 */}
      {/* <Route path="/home/message/detail/:id/:title" component={Detail}/> */}

      {/* search参数无需声明接收,正常注册路由即可 */}
      {/* <Route path="/home/message/detail" component={Detail} /> */}

      {/* state参数无需声明接收,正常注册路由即可 */}
      <Route path="/home/message/detail" component={Detail} />
    </div>
  )
}
