import "./App.css"
import Header from "./components/Header"
import Form from "./components/Form"
import {useState} from "react"
import TodoList from "./components/TodoList"

export default  () => {
    const [input, setInput] = useState("")
    const [todos, setTodos] = useState([])
    const [editTodo, setEditTodo] = useState(null)

    return (
        <div>
           <div className="container">
            <div className="app-wrapper">
                <div>
                    <Header />
                </div>
                <div>
                    <Form
                    input={input}
                    setInput={setInput}
                    todos={todos}
                    setTodos={setTodos}
                    editTodo={editTodo}
                    setEditTodo={setEditTodo}
                    />
                </div>
                <div>
                    <TodoList todos={todos} setTodos= {setTodos} setEditTodo={setEditTodo}/>
                </div>
            </div>
         </div>
        </div>
    )
}