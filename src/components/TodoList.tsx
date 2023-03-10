import React from 'react'
import { Todo } from './Model'
import SingleTodo from './SingleTodo'
import './style.css'
type TodoListProps={
    todos:Todo[]
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const TodoList = ({todos, setTodos}:TodoListProps) => {
  return (
    <div className='todos'>
        {
            todos.map(todo=>(
<SingleTodo
todo={todo}
key={todo.id}
todos={todos}
setTodos={setTodos}
/>

            ))
        }

    </div>
  )
}

export default TodoList