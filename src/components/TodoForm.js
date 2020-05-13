import React, { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";

const NewTodo = () => {
    const { addTodo } = useContext(TodoContext);
    const [ title, setTitle ] = useState('');
    const [ text, setText ] = useState('');
    const add = (e) => {
        e.preventDefault();
        if (title !== '') {
            addTodo(title, text);
            setTitle('');
            setText('');
        }
    }

    return (
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                        <textarea id="textarea1" className="materialize-textarea" value={title}
                                  onChange={(e) => setTitle(e.target.value)}/>
                        <label htmlFor="textarea1">Title</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <textarea id="textarea2" className="materialize-textarea" value={text}
                                  onChange={(e) => setText(e.target.value)}/>
                        <label htmlFor="textarea2">Description</label>
                    </div>
                </div>
                <a className="waves-effect waves-light btn" onClick={add}><i className="material-icons left">add_box</i>Add Todo</a>
            </form>
        </div>
    )
}

export default NewTodo;