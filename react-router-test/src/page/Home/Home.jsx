import React, {useState, useEffect} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import News from './News/News'
import Message from './Message/Message'

import MyNavLink from '../../components/MyNavLink/MyNavLink'

export default function Home(props  ) {
  // console.log('Home组件收到的props是', props)
  // const {history, location, match} = props
  // console.log(history, location, match)
  const [lover, setLover] = useState({lovername: '', age: 2, sex: 'boy'})
  useEffect(() => {
    setLover({lovername: 'cjz', age: 22, sex: 'boy'})
    return () => {
      console.log(111)
    }
  }, [])
  return (
    <div>
      <h2>Home组件</h2>
      <div className="home-nav-list">
        <MyNavLink to="/home/news">新闻</MyNavLink>
        <MyNavLink to="/home/message">消息</MyNavLink>
      </div>
      <div className="news-show-container">
        <Switch>
          {/* 开启严格模式会导致无法匹二级路由 */}
          {/* <Route exact path="/home/news" component={News} />
          <Route exact path="/home/message" component={Message} /> */}

          <Route path="/home/news" component={News} />
          <Route path="/home/message" component={Message} />
          <Redirect to="/home/news"/>
        </Switch>
      </div>
    </div>
  )
}
