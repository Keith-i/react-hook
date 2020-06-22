import React, { useState } from 'react'
import TodoForm from './TodoForm'

const TodoList = () => {

  const [todos, setTodos] = useState([])

  function setValue(text) {
    setTodos([{text}, ...todos])
  }
  
  return(
    <div>
      <TodoForm onSubmit={setValue}/>
      <div>
        {
          todos.map((element, index) => {
            return (
              <div key={index}>
                {element.text}
              </div>
            )
          })
        }
      </div>
      <button onClick={() => {setTodos([])}}>clear</button>
    </div>
  )
}

export default TodoList