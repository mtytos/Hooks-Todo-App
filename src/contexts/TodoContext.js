import React, { createContext, useState } from "react";
import uuid from 'uuid/dist/v1';
export const TodoContext = createContext();

const TodoContextProvider = (props) => {
    const [todos, setTodos] = useState([
        {title: 'Create app', text: 'i dont have sleep', id: 1},
        {title: 'Create app2', text: 'i dont have sleep2', id: 2}
    ]);
    const addTodo = (title, text) => {
        setTodos([...todos, {title, text, id: uuid() }]);
    };
    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };
    return (
        <TodoContext.Provider value={{todos, addTodo, removeTodo}}>
            { props.children }
        </TodoContext.Provider>
    )
}

export default TodoContextProvider;