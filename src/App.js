import React from 'react';
import TodoContextProvider from "./contexts/TodoContext";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import TodoPage from "./layouts/TodoPage";
import AddTodoPage from "./layouts/AddTodoPage";


const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <TodoContextProvider>
                    <Navbar/>
                    <Switch>
                        <Route exact path='/' component={TodoPage}/>
                        <Route exact path='/addtodo' component={AddTodoPage}/>
                    </Switch>
                </TodoContextProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
