import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import image from "../assets/navImageLogo.jpg";
import { useState } from "react";


function Navbar() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    };

    return (
        <nav className="nav-container">
            <Link to="#" className="navbar-brand">
                <img src={image} alt="image" />
                <span>ZyraMart</span>
            </Link>

            <div className="search-bar">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="search" placeholder="Search for Product, Brand and More" />
            </div>

            <div className="nav-toggler" onClick={handleClick}>
                <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>

            <ul className={clicked ? "nav-items-container-active" : "nav-items-container"}>

                <li className="nav-item">
                    <Link to="/" className="nav-link" onClick={() => setClicked(false)}>Home</Link>
                </li>

                <li className="nav-item">
                    <Link to="/addproduct" className="nav-link" onClick={() => setClicked(false)}>AddProduct</Link>
                </li>

                <li className="nav-item">
                    <Link to="/about" className="nav-link" onClick={() => setClicked(false)}>About</Link>
                </li>

                <li className="nav-item">
                    <Link to="/contact" className="nav-link" onClick={() => setClicked(false)}>Contact</Link>
                </li>

                <li>
                    <Link to="/login" className="nav-link" onClick={() => setClicked(false)}>Login</Link>
                </li>

                <li className="nav-item">
                    <Link to="/cart" className="nav-link" onClick={() => setClicked(false)}><i className="fa-solid fa-cart-plus"></i></Link>
                </li>

                <li className="nav-item">
                    <Link to="/myprofile" className="nav-link" onClick={() => setClicked(false)}><i className="fa-solid fa-user"></i></Link>
                </li>
            </ul>

        </nav>
    )
}


export default Navbar;