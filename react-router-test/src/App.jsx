// import './App.css';
import './App.less'

// import Login from './page/Login/Login'
// import Life from './page/Life/Life'
// import ParentChild from './page/ParentChild/ParentChild'

import { Switch, Route, Redirect } from 'react-router-dom'
import Home from './page/Home/Home'
import About from './page/About/About'
import Test from './page/Test/Test'  

import Header from './components/Header/Header'
import MyNavLink from './components/MyNavLink/MyNavLink'

function App() {
  return (
    <div className="app-container">
      {/* <Login/>
      <Life/>
      <ParentChild/> */}

      <div className="header">
        <Header name="cpp"/>
      </div>
      <div className="main-content">
        <div className="nav-list">

          {/* <NavLink activeClassName="myactive" to="/home" className="nav-list-item">Home</NavLink>
          <NavLink activeClassName="myactive" to="/about" className="nav-list-item">About</NavLink> */}

          {/* 使用封装后的MyNavLink */}
          <MyNavLink to="/home">Home</MyNavLink>
          <MyNavLink to="/about">About</MyNavLink>
        </div>
        <div className="show-container">
          <Switch>
            <Route path='/home' component={Home} />
            <Route path='/about' component={About} />
            {/* <Route path='/home' component={Test}/> */}
            <Redirect to='/about' />
          </Switch>
        </div>
        <Test/>
      </div>
    </div>
  );
}

export default App;
