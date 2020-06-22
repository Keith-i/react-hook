import React, { useState } from 'react'

const useInputValue = (initialValue) => {
  const [value, setValue] = useState(initialValue)
  return {
    value,
    onChange: e => setValue(e.target.value),
    resetVal: () => setValue("")
  }
}

const TodoForm = ({ onSubmit }) => {
  const {resetVal, ...text} = useInputValue("")
  // const password = useInputValue("")
  function onSubmitHandler(e) {
    e.preventDefault()
    onSubmit(text.value)
    resetVal("")
  }
  return(
    <form onSubmit={ onSubmitHandler }>
      <input type="text" {...text} />
      {/* <input type="password" {...password} /> */}
    </form>
  )
}

export default TodoForm