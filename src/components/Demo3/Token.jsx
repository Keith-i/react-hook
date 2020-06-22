import React, { useState, useEffect } from 'react'
class TokenFrom extends React.Component {

  handlerSubmit = (event) => {
    event.preventDefault()
    // 数据来源于props
    const { setToken } = this.props
    const token = this.tokenInput.value
    if (token) {
      setToken(token)
    }
  }

  render() {
    return (
      <form onSubmit={ this.handlerSubmit }>
        <input type="text" name="token" placeholder="enter your token"
          ref={ input => { this.tokenInput = input } }
        />
      </form>
    )
  }
}

// export default class TokenApp extends React.Component {

//   state = {
//     token: null
//   }

//   componentDidMount() {
//     // 数据存在本地
//     this.setState({
//       token: sessionStorage.getItem("token")
//     })
//   }

//   setToken = token => {
//     sessionStorage.setItem("token", token)
//     this.setState({
//       token
//     })
//   }

//   render() {
//     const { token } = this.state
//     return (
//       <div>
//         <h1>hello</h1>
//         {
//           token? token: <TokenFrom setToken={ this.setToken } />
//         }
//       </div>
//     )
//   }
// }

const TokenApp = () => {
  const [token, setToken] = useState(null)
  useEffect(() => {
    sessionStorage.setItem("token", token)
  })
  return(
    <div>
      <h1>hello</h1>
      {
        token? token: <TokenFrom setToken={ setToken } />
      }
    </div>
  )
}

export default TokenApp