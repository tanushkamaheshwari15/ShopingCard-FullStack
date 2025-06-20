import React from "react";
import "./SignUp.css";
import signupImage from "../assets/signup.png";

function SignUp() {
    return (
        <form className="signup-form">

            <div className="signup-container">
                <h1 className="signup-heading">Sign Up User</h1>
                <label htmlFor="name" className="signup-label">User Name :</label>
                <input type="text" placeholder="Enter User Name" id="name" className="signup-input" />

                <label htmlFor="email" className="signup-label">User Email:</label>
                <input type="email" className="signup-input" id="email" placeholder="Enter User Email" />

                <label htmlFor="phone" className="signup-label">User Contact :</label>
                <input type="number" id="phone" className="signup-input" placeholder="Enter user Phone Number" />

                <label htmlFor="address" className="signup-label">User Address :</label>
                <input type="text" id="address" className="signup-input" placeholder="Enter User Address" />

                <label htmlFor="gender" className="signup-label">User Gender :</label>
                <input type="text" id="gender" className="signup-input" placeholder="Enter User gender" />

                <label htmlFor="age" className="signup-label">User Age :</label>
                <input type="number" id="age" className="signup-input" placeholder="Enter User Age" />

                <label htmlFor="password" className="signup-label">User Password :</label>
                <input type="password" id="password" className="signup-input" placeholder="Enter User Password" />

                <button className="signup-button">Submit</button>
            </div>

            <div className="signup-image">
                <img src={signupImage} alt="Image.." />
            </div>
        </form>
    )
}
export default SignUp;