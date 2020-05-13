import React, { createContext, useReducer, useEffect } from "react";
import {todoReducer} from "../reducers/todoReducer";

export const TodoContext = createContext();

const TodoContextProvider = (props) => {
    const [todos, dispatch] = useReducer(todoReducer, [], () => {
        const localTodo = localStorage.getItem('todos');
        return localTodo ? JSON.parse(localTodo) : [];
    });
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    return (
        <TodoContext.Provider value={{todos, dispatch}}>
            { props.children }
        </TodoContext.Provider>
    )
}

export default TodoContextProvider;