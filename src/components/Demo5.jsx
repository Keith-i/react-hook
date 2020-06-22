// import React from 'react'

// export default class Demo5 extends React.Component {
//   state = {
//     count: 0,
//     name: 'keith'
//   }

//   componentDidMount() {
//     document.title = `you clicked ${this.state.count} times`
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.count !== this.state.count) {
//       console.log('触发')
//       document.title = `you clicked ${this.state.count} times`
//     }
//   }

//   clickCountHandler = () => {
//     this.setState({
//       count: this.state.count + 1
//     })
//   }

//   clickNameHandler = () => {
//     this.setState({
//       name: 'keith-i'
//     })
//   }

//   render() {
//     return(
//       <div>
//         <p>
//           {
//             document.title = `you clicked ${this.state.count} times`
//           }
//           {
//             this.state.name
//           }
//         </p>
//         <button onClick={this.clickCountHandler}>click me</button>
//         <button onClick={this.clickNameHandler}>click me</button>
//       </div>
//     )
//   }
// }

import React, { useState, useEffect } from 'react'

const Demo5 = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('keith')
  /**
   * 第二个参数
   * []:相当于生命周期函数的：componentDidMount
   * 没有第二个参数：相当于生命周期函数：componentDidMount, componentDidUpdate
   * [count]: 只监听count发生改变的时候，才会触发componentDidUpdate
   * 
   * return: 相当于componentWillUnmount
   * 
   */

  useEffect(() => {
    console.log('执行')
    document.title = `you clicked ${count} times`
  })

  return (
    <div>
      <p>you clicked {count} times</p>
      <p>{name}</p>
      <button onClick={() => setCount(count+1)}>Click me</button>
      <button onClick={() => setName("keith-i")}>Click me Name</button>
    </div>
  )
}

export default Demo5