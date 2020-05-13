import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const Navbar = () => {
    const { todos } = useContext(TodoContext);

    return (
        <nav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo right">{ todos.length}</a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><a href="#">Sass</a></li>
                    <li><a href="#">Components</a></li>
                    <li><a href="#">JavaScript</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;