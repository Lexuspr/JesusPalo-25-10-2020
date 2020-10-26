import React, { useContext, useEffect } from 'react'
import todoContext from '../../context/todo/todoContext'

function TodoList() {

    const todosContext = useContext(todoContext)
    const { message, todos, getTodos } = todosContext

    useEffect(() => {
        getTodos()
    }, [getTodos])

    if (todos.length === 0) return <h1>Not found</h1>

    return (
        <p>{todos}</p>
    )
}

export default TodoList