import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";


function Navbar() {

    return (
        <nav className="nav-container">
            <Link to="#" className="navbar-brand">E-Commerce.</Link>


            <ul className="nav-items-container">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>

                <li className="nav-item">
                    <Link to="/about" className="nav-link">About</Link>
                </li>

                <li className="nav-item">
                    <Link to="/addproduct" className="nav-link">AddProduct</Link>
                </li>

                <li className="nav-item">
                    <Link to="/contact" className="nav-link">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}
export default Navbar;