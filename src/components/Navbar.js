import React, {useContext} from "react";
import {Link} from "react-router-dom";

const Navbar = () => {

    return (
        <nav className="nav-wraper light-blue">
            <div className="container">
                <ul className="hide-on-small-only">
                    <li><Link to={'/'}>Todo</Link></li>
                    <li><Link to={'/addtodo'}>Add new Todo</Link></li>
                </ul>
                <ul className="hide-on-med-and-up">
                    <li><Link to={'/'}>
                        <i className="material-icons">today</i>
                    </Link></li>
                    <li><Link to={'/addtodo'}>
                        <i className="material-icons">add_to_queue</i>
                    </Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;