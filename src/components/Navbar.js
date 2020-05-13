import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {ThemeContext} from "../contexts/ThemeContext";

const Navbar = () => {

    const { theme } = useContext(ThemeContext);
    const { changeTheme } = useContext(ThemeContext);
    let color = theme.isDark ? theme.dark : theme.light;
    const style = 'nav-wraper ' + color;
    let word = theme.isDark ? 'Dark' : 'Light';
    let icon = theme.isDark ? (<i className="material-icons">brightness_2</i>) : (
        <i className="material-icons">brightness_low</i>
    );

    return (
        <nav className={style}>
            <div className="container">
                <ul className="hide-on-small-only">
                    <li><Link to={'/'}>Todo</Link></li>
                    <li><Link to={'/addtodo'}>Add new Todo</Link></li>
                    <li onClick={changeTheme} className="right">{word}</li>
                </ul>
                <ul className="hide-on-med-and-up">
                    <li><Link to={'/'}>
                        <i className="material-icons">today</i>
                    </Link></li>
                    <li><Link to={'/addtodo'}>
                        <i className="material-icons">add_to_queue</i>
                    </Link></li>
                    <li onClick={changeTheme} className="right">{icon}</li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;