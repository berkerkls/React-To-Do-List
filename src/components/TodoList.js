import React from 'react'


function TodoList({todos, setTodos}) {

    const handleDelete = ({id}) => {

        if(window.confirm("Are you sure you want to delete this?")) {
            setTodos( todos.filter((item) => id !== item.id))
        }
        
    }


    const handleComplete = (todo) => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id) {
                return {...item, completed: !item.completed}
            }
            return item;
        }))
    }



  return (
    <div>
        {todos.map((item) => (
        <li className='list-item' key={item.id}>
            <input
                type="text"
                value={item.title}
                className="list"
                onChange={(e) => e.preventDefault()}
            />
            <div>
                <button className='button-complete task-button' onClick={() => handleComplete(item)}>
                    <i className='fa fa-check-circle fa-2x'></i>
                </button>
                <button className='button-delete task-button' onClick={() => handleDelete(item)}>
                    <i className='fa fa-trash fa-2x'></i>
                </button>
            </div>
        </li>
        )
            
        )}
    </div>
  )
}

export default TodoList