import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import image from "../assets/navImage.jpg";


function Navbar() {

    return (
        <nav className="nav-container">
            <Link to="#" className="navbar-brand">
                <img src={image} alt="image" />
            </Link>

            <div className="nav-icons">
                <i className="fa-solid fa-bars"></i>
            </div>

            <div className="search-bar">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="search" placeholder="Search for Product, Brand and More" />
            </div>

            <ul className="nav-items-container">

                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>

                <li className="nav-item">
                    <Link to="/addproduct" className="nav-link">AddProduct</Link>
                </li>

                <li className="nav-item">
                    <Link to="/about" className="nav-link">About</Link>
                </li>

                <li className="nav-item">
                    <Link to="/contact" className="nav-link">Contact</Link>
                </li>

                <li>
                    <Link to="/login" className="nav-link">Login</Link>
                </li>

                <div>
                    <Link to="/cart" className="nav-link"><i className="fa-solid fa-cart-plus"></i></Link>
                    <Link to="/myprofile" className="nav-link"><i className="fa-solid fa-user"></i></Link>
                </div>
            </ul>
        </nav>
    )
}


export default Navbar;