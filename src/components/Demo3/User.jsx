// 方法一
// import React from 'react'

// const userSet = ['张三', '李四', '王五', '赵刘']

// export default class UserGenerator extends React.Component {
//   state = {
//     user: userSet[0]
//   }

//   generateUser = () => {
//     let randomIndex = Math.floor(Math.random() * userSet.length)
//     let randomUser = userSet[randomIndex]
//     this.setState({
//       user: randomUser
//     })
//   }

//   render() {
//     return (
//       <div>
//         <span>{ this.state.user }</span>
//         <button onClick={ this.generateUser }>切换</button>
//       </div>
//     )
//   }
// }


// 方法二
import React, { useState } from 'react'

const userSet = ['张三', '李四', '王五', '赵刘']

const UserGenerate = () => {

  const [user, setUser] = useState(userSet[0])

  const UserGenerateUser = () => {
    let randomIndex = Math.floor(Math.random() * userSet.length)
    let randomUser = userSet[randomIndex]
    setUser(userSet[randomIndex])
  }

  return(
    <div>
      <span>{ user }</span>
      <button onClick={ UserGenerateUser }>切换</button>
    </div> 
  )
}

export default UserGenerate