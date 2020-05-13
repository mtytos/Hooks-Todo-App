import React from 'react';
import TodoContextProvider from "./contexts/TodoContext";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import NewTodo from "./components/TodoForm";

const App = () => {
    return (
        <div className="App">
            <TodoContextProvider>
                <Navbar />
                <TodoList />
                <NewTodo />
            </TodoContextProvider>
        </div>
    );
}

export default App;
