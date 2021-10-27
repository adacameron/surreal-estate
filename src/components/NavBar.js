import React from "react";
import '../styles/NavBar.css'
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom';
const NavBar = () => {

    return (
        <div className="navbar">
            <img src={logo} alt="Logo" />
            <h2>Surreal Estate</h2>

            <ul className="navbar-links">
                <li className="navbar-links-item">
                    <NavLink to="/">View Properties</NavLink>
                </li>

                <li className="navbar-links-item">
                    <NavLink to="/add-property">Add a Property</NavLink>
                </li>
            </ul>

        </div>
    )
};

export default NavBar;
