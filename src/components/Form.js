import React from 'react'
import {v4 as uuidv4} from "uuid"

function Form({input, setInput, todos, setTodos}) {
  const onInputChange = (e) => {
    setInput(e.target.value)
    
  }
  
  const onFormSubmit = (e) => {
    e.preventDefault()
    setTodos([...todos, {id: uuidv4(), title: input, completed: false}])
    setInput("")
  }
  
    return (
    <form onSubmit={onFormSubmit}>
        <input placeholder='Enter a task' className='task-input' value={input} onChange={onInputChange} />
        <button className='button-add' type='submit'>Add</button>
    </form>
  )
}

export default Form