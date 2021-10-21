import React from "react";
import '../styles/NavBar.css'
import logo from '../assets/logo.png'

const NavBar = () => {

    return (
        <div className="navbar">
            <img src={logo} alt="Logo" />
            <h2>Surreal Estate</h2>

            <ul className="navbar-links">
                <li className="navbar-links-item">
                    <a href="http://localhost:3000">View Properties</a>
                </li>

                <li className="navbar-links-item">
                    <a href="http://localhost:3000">Add a Property</a>
                </li>
            </ul>

        </div>
    )
};

export default NavBar;
