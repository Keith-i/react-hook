import React, { useState, useCallback } from 'react'

// class Demo1 extends React.Component {
//   state = {
//     count: 0
//   }
//   render() {
//     return (
//       <div>
//           Demo1: {this.state.count}
//       </div>
//     )
//   }
// }

const Demo1 = () => {

  const [count, setCount] = useState(0)
  const [page, setPage] = useState(0)
  const [cont, setCont] = useState(0)
  const [cont1, setCount1] = useState(0)

  function setConn() {
    setCont(cont + 1)
  }

  return(
    <div>
        Hello: {count} - {page} <br />
        Hei: { cont }
        heito: { cont1 }
        <button onClick={ () => { setCount(count+1) } }>Add</button>
        <button onClick={ () => { setPage(page+1) } }>AddPage</button>
        <button onClick={ () => { setConn() } }>增加</button> 
        <button onClick={ useCallback(() => setCount1(cont1+1), [cont]) }>count1增加</button>
    </div>
  )
}

export default Demo1