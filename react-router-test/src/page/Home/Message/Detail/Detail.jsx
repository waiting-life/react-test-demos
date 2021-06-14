import React from 'react'
// import qs from 'querystring'
export default function Detail(props) {
  console.log(props)
  // 接收params参数
  // const {id, title} = props.match.params
  // console.log(id, title)

  // 接收search参数
  // const {search} = props.location
  // console.log(search.slice(1))
  // const {id, title} = qs.parse(search.slice(1))

  // 接收state参数
  // console.log(props)
  const {id, title} = props.location.state || {}
  const detailArr = [
    { id: '01', name: 'cpp', age: 2, sex: 'boy', content: '你好cpp' },
    { id: '02', name: 'clg', age: 22, sex: 'boy', content: '你好clg' },
    { id: '03', name: 'cjz', age: 222, sex: 'boy', content: '你好cjz' }
  ]

  const detailObj = detailArr.find(item => item.id === id) || {}
  return (
    <div>
      <ul>
        `<li>ID:{id}</li>
        <li>content: {detailObj?.content}</li>
        <li>name:{detailObj?.name}</li>
        <li>age: {detailObj?.age}</li>
        <li>sex: {detailObj?.sex}</li>
        <li>title: {title}</li>`
      </ul>
    </div>
  )
}
