import React, { useState, useEffect } from 'react'

const MyAPI = {
  count: 0,
  subscribe(cb) {
    this.intervalId = setInterval(() => {
      this.count += 1
      cb(this.count)
    }, 1000)
  },
  unSubscribe() {
    clearInterval(this.intervalId)
    this.reset()
  },
  reset() {
    this.count = 0
  }
}

// export default class Demo9 extends React.Component {
//   state = {
//     count: 0
//   }

//   componentDidMount() {
//     MyAPI.subscribe(count => {
//       this.setState({
//         count
//       })
//     })
//   }

//   componentWillUnmount() {
//     MyAPI.unSubscribe()
//   }

//   render() {
//     return(
//       <div>
//         { this.state.count }
//       </div>
//     )
//   }
// }

const Demo9 = () => {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    MyAPI.subscribe(currentCount => {
      setCount(currentCount)
    })

    // 副作用的处理方案
    return () => {
      // 清除掉定时器
      MyAPI.unSubscribe()
    }
  }, [])

  return(
    <div>
      { count }
    </div>
  )
}

export default Demo9