import React from "react";
import "./LoginData.css";
import { Link } from "react-router-dom";
import SignUp from "./SignUp";
function LoginData() {
    return (
        <form className="login-form">
            <h1 className="login-heading">Login User</h1>
            <div className="login-container">

                <label htmlFor="userEmail" className="login-label">Email:</label>

                <input type="email" id="userEmail" placeholder="Enter Your Email" className="login-input" />

                <label htmlFor="password" className="login-label">Password:</label>
                <input type="password" id="password" placeholder="Enter Your Password" className="login-input" />

                <button className="login-button">Click</button>

                <div>
                    <p>Forget Password  <Link to="/" className="login-link">Username</Link> / <Link to="/" className="login-link">Forget</Link> ?</p>
                    <p>Don't have an accound ? <Link className="login-link" to="/SignUp">Sign Up</Link></p>
                </div>
            </div>
        </form>

    )
}
export default LoginData;
