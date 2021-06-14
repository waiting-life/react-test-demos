import React,{Component,Fragment} from 'react'
import './style.css'
import LgItem from './LgItem'
import axios from 'axios'
class Lg extends Component {
  //生命周期，在某一时刻，可以自动执行的函数
  //初始化阶段
  constructor(props) {
    super(props)
    this.deleteItem = this.deleteItem.bind(this)
    this.inputChange = this.inputChange.bind(this)
    this.addList = this.addList.bind(this)
    this.onKeyup = this.onKeyup.bind(this)
    //所有的数据都要写在this.state里面

    this.state = {
      inputValue: '',
      list: ['cpp','cjz','clg']
    }
  }

  componentDidMount() {
    axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
      .then((res) => {
        console.log('axios获取数据成功'+JSON.stringify(res))
      })
      .catch((err) => {
        console.log('axios获取数据失败:'+err)
      })
  }

  // UNSAFE_componentWillMount() {
  //   console.log('UNSAFE_componentWillMount-------组件将要挂载到页面的时刻')
  // }
  // componentDidMount() {
  //   console.log('componentDidMount--------组件挂载完成的时刻')
  // }
  // shouldComponentUpdate() {
  //   console.log('shouldComponentUpdate-------组件更新之前执行')
  //   //返回false的时候直接不执行更新后的render，后面的UNSAFE_componentWillUpdate直接不执行
  //   // return false
  //   return true
  // }
  
  // UNSAFE_componentWillUpdate() {
  //   console.log('UNSAFE_componentWillUpdate')
  // }
  // componentDidUpdate() {
  //   console.log('componentDidUpdate------组件更新完毕，渲染了虚拟dom之后执行')
  // }

  //不显示，顶层文件这个组件是，没有接受任何props
  // UNSAFE_componentWillReceiveProps() {
  //   console.log('UNSAFE_componentWillReceiveProps')
  // }

 
  render() {
    // console.log('render------组件挂载中')
    return (
      // <div>
      //   <div><input/><button>吃饭</button></div>
      //   <ul>
      //     <li>螺蛳粉</li>
      //     <li>无界</li>
      //   </ul>
      // </div>
    
      //flex
      <Fragment>
        {/* 第一次写注释 */}
        <div>
          <label htmlFor="lg">lg</label>
          <input id="lg" 
                 className='input' 
                 value={this.state.inputValue} 
                 onKeyUp={this.onKeyup} 
                 onChange={this.inputChange}
                 ref={(input)=>{this.input=input}}/>
          <button onClick={this.addList}>Love</button>
        </div>
        <ul ref={(ul) => this.ul=ul}>
          {
            this.state.list.map((item,index) => {
              return (
                <LgItem 
                  lover="wqj"
                  key={index+item} 
                  content={item}
                  index={index}
                  deleteItem={this.deleteItem}
                  />
              )
            })
          }
        </ul>
      </Fragment>
    )
  }
  inputChange() {
    // console.log(e.target.value)
    // console.log(this)
    // this.state.inputValue = e.target.value

    // this.setState({
    //   inputValue: e.target.value
    // })

    
    this.setState({
      inputValue:this.input.value
    })  
  }
  //点击按钮增加列表
  addList() {
    // setState是异步，所以直接下面输出的结果不对，对虚拟dom的渲染也是有时间的
    //所以react里面增加了回调函数
    if(this.state.inputValue === '') return
    this.setState({
      list: [...this.state.list,this.state.inputValue],
      inputValue: ''
    },()=> {
      console.log(this.ul.querySelectorAll('li').length)
    }) 
    // console.log(this.ul.querySelectorAll('li').length)
  }
  //回车增加列表
  
  onKeyup(e) {
    // console.log(e)
    if(e.keyCode === 13) {
      this.addList()
    }
  }
  //删除列表项
  deleteItem(index) {
    // this.setState({
    //   list: this.state.list.
    // }) 
    // console.log(index)
    //采用先声明局部变量，然后删除
    let list = this.state.list
    list.splice(index,1)
    this.setState({
      list: list
    })

    //也不能这样写,坑^-^,性能会受到很大影响
    // this.state.list.splice(index,1)
    // this.setState({
    //   list: this.state.list
    // })

    //自己写法，错了，因为这样是直接把返回值给了list，即删除的那一项
    //应该把改变后的list数组赋值给list
    //splice()方法会改变原数组，返回所删除的那一项
    // this.setState({
    //   list: this.state.list.splice(index,1)
    // })
  }
}
export default Lg;