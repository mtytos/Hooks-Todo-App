import React from 'react';
import TodoContextProvider from "./contexts/TodoContext";
import ThemeContextProvider from "./contexts/ThemeContext";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import TodoPage from "./layouts/TodoPage";
import AddTodoPage from "./layouts/AddTodoPage";


const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <ThemeContextProvider>
                    <TodoContextProvider>
                        <Navbar/>
                        <Switch>
                            <Route exact path='/' component={TodoPage}/>
                            <Route exact path='/addtodo' component={AddTodoPage}/>
                        </Switch>
                    </TodoContextProvider>
                </ThemeContextProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
