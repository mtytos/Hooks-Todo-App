import React, {useContext, useState} from "react";
import {TodoContext} from "../contexts/TodoContext";
import { Redirect } from "react-router-dom";
import {addTodo} from "../actions/todoAction";

const NewTodo = () => {
    const { dispatch } = useContext(TodoContext);
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [toHome, setToHome] = useState(false);
    const add = (e) => {
        e.preventDefault();
        if (title !== '') {
            dispatch(addTodo(title, text));
            setTitle('');
            setText('');
            setToHome(true);
        }
    }

    return (
        <div className="container left-align">
            <br/><br/>
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
                <button className="waves-effect waves-light btn light-blue" onClick={add}><i className="material-icons left">add_box</i>Add Todo</button>
            </form>
            { toHome ? <Redirect to="/" /> : null }
        </div>
    )
}

export default NewTodo;