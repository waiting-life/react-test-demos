import React from 'react'

export default function Login(props) {
  const [userInfo, setUserInfo] = React.useState({username: '', password: ''})
  function handleSubmit(e) {
    e.preventDefault()
    
  }
  function saveFormData(dataType, e) {
    setUserInfo({...userInfo, [dataType]: e.target.value})
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        用户名：<input type="text" name="username" value={userInfo.username} onChange={(e) => saveFormData('username', e)}/>
        密码： <input type="password" name="password" value={userInfo.password} onChange={(e) => saveFormData('password', e)}/>
        <button>登录</button>
      </form>
    </div>
  )
}
