import React from 'react'
import {NavLink} from 'react-router-dom'

export default function MyNavLink(props) {
  // console.log('MyNavLink收到的props是', props)
  return (
    <>
      {/* <NavLink activeClassName="myactive" className="nav-list-item" {...props}>{props.children}</NavLink> */}
      {/* {...props}不仅把自己传的属性带过来，还把props的children属性带了过来 */}
      {/* <NavLink activeClassName="myactive" className="nav-list-item" {...props}/> */}
      <NavLink className="nav-list-item" {...props} />
    </>
  )
}
