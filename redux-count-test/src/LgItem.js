import React, { Component } from 'react';
import PropTypes from 'prop-types'

class LgItem extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  //组件第一次存在于dom中，函数是不会执行的
  //如果已经存在于dom中，函数才会被执行
  // UNSAFE_componentWillReceiveProps() {
  //   console.log('child-UNSAFE_componentWillReceiveProps')
  // }

  // componentWillUnmount() {
  //   console.log('child-componentWillUnmount---组件被删除之前执行')
  // }

  //render渲染太频繁，影响性能
  //解决方法
  //没有变化不重新渲染，有变化重新渲染
  shouldComponentUpdate(nextProps,nextState) {
    if(nextProps.content !== this.props.content) {
      return true
    }else {
      return false
    }
  }


  render() { 
    console.log('child-render')
    return (  
      <li onClick={this.handleClick}>
        {this.props.lover} loves {this.props.content}--{this.props.name}
      </li>
    );
  }
  handleClick() {
    // console.log(this.props.index)
    this.props.deleteItem(this.props.index)
  }
}

LgItem.propTypes = {
  lover:PropTypes.string.isRequired,
  content: PropTypes.string,
  index: PropTypes.number,
  deleteItem: PropTypes.func
}
// 默认值
LgItem.defaultProps={
  name: 'lg'
}

export default LgItem;