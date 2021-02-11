import React, {useState} from 'react';
import Logo from '../../logo.png';
import {NavLink} from "react-router-dom";
import "./header.scss";

let Header = () => {
    let [openMenu,setOpenMenu] = useState(false);
    return(
    <header>
        <div className="inner">
            <div className="logo">
                <NavLink to='/' exact><img src={Logo} alt="Logo"/></NavLink>
            </div>
            <div className={"menuToggler"  +(openMenu  ? " menuOpen" : "")} onClick={() => {setOpenMenu(!openMenu)}}>
                <span></span>
            </div>
            <nav className={(openMenu  ? " menuOpen" : "")}>
                <ul>
                    <li onClick={() => {setOpenMenu(!openMenu)}}><NavLink to='/' exact>Ну так-то главная</NavLink></li>
                    <li onClick={() => {setOpenMenu(!openMenu)}}><NavLink to='/about'>Што это</NavLink></li>
                </ul>
            </nav>
        </div>
    </header>
)}
export default Header;