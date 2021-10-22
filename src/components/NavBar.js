import React from "react";
import '../styles/NavBar.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';
const NavBar = () => {

    return (
        <div className="navbar">
            <img src={logo} alt="Logo" />
            <h2>Surreal Estate</h2>

            <ul className="navbar-links">
                <li className="navbar-links-item">
                    <Link to="/">View Properties</Link>
                </li>

                <li className="navbar-links-item">
                    <Link to="/add-property">Add a Property</Link>
                </li>
            </ul>

        </div>
    )
};

export default NavBar;
