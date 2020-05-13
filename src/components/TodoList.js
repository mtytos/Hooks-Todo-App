import React, {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";

const TodoList = () => {
    const {todos} = useContext(TodoContext);
    const {removeTodo} = useContext(TodoContext);

    return todos.length ? (
        todos.map(todo => {
            return (
                <div className="container left-align">
                    <div className="row" key={todo.id}>
                        <div className="col s12 m12">
                            <div className="card">
                                <div className="card-content">
                                    <span className="card-title">{todo.title}</span>
                                    <p>{todo.text}</p>
                                </div>
                                <div className="card-action">
                                    <a href="#" onClick={() => removeTodo(todo.id)}>DELETE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    ) : (
        <div className="container left-align">
            <div className="row">
                <div className="col s12 m12">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">Card Title</span>
                            <p>I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodoList;