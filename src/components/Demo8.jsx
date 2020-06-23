import React, { useState, useEffect } from 'react'
// http://zh-hans.reactjs.org/docs/hooks-rules.html
const Demo8 = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `You clicked, ${count} times Demo8`
  })

  return(
    <div>
      <p>You clicked, {count} times Demo8</p>
      <button onClick={ () => setCount(count+1) }>点击我</button>
    </div>
  )
}

export default Demo8