import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {nanoid} from 'nanoid'
import { addPerson } from '../../redux/actions/person'

export default function Person() {
  const [userInfo, setUserInfo] = useState({
    name: '',
    age: '',
    id: null,
  })
  const state = useSelector(state => state)
  const {count, persons} = state
  const dispatch = useDispatch()


  const saveUserInfo = (dataType, e) => {
    setUserInfo({...userInfo, [dataType]: e.target.value,})
  }
  const handleAddPerson = () => {
    setUserInfo({...userInfo, id: nanoid()})
    dispatch(addPerson(userInfo))
  }

  return (
    <div>
      <h2>我是Perosn组件</h2>
      <h3>上方Count组件的和为：{count}</h3>
      <input type="text" placeholder="请输入姓名" value={userInfo.name} onChange={(e) => saveUserInfo('name', e)}/>
      <input type="text" placeholder="请输入年龄" value={userInfo.age} onChange={(e) => saveUserInfo('age', e)}/>
      <button onClick={handleAddPerson}>添加</button>
      <ul>
        {
          persons.map(item => (
            <li key={item.id}>name: {item.name}---------age: {item.age}</li>
          ))
        }
      </ul>
    </div>
  )
}
