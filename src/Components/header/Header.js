import React from 'react';
import Logo from '../logo.png';
import {NavLink} from "react-router-dom";

let Header = () => (
    <header>
        <div className="inner">
            <div className="logo">
                <NavLink to="./"><img src={Logo} alt="Logo"/></NavLink>
            </div>
            <nav>
                <ul>
                    <li><NavLink to="/">Ну так-то главная</NavLink></li>
                    <li><NavLink to="/about">Што это</NavLink></li>
                </ul>
            </nav>
        </div>
    </header>
)
export default Header;