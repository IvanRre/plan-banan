import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({coins}) => {
    return (
        <ul className="nav">
            <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/main">
                    Главная
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/tasks">
                    Проекты
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/analytics">
                    Аналитика
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/login">
                    Login
                </Link>
            </li>
            <li>{coins}</li>
        </ul>
    );
};

export default NavBar;
