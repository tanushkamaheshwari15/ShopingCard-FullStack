import React from "react";
import "./ContactData.css";
import contactImage from "../assets/contact.png"
function ContactData() {
    return (
        <div className="contact-container">
            <img src="https://st2.depositphotos.com/1265075/7581/i/450/depositphotos_75818865-stock-photo-web-contact-us-concept.jpg" alt="Image.." className="contact-image" />
            <h1 className="contact-main-heading">let's Start a Conversation</h1>

            <div className="contact-main-box">
                <div className="contact-first">
                    <h2>Ask how we can help you :</h2>
                    <p>Thank you for interesr in E-commerce. Please use this form to contact us. We will get back to you as soon as we can</p>
                    <img src={contactImage} alt="image.." className="contact-first-image"/>
                </div>
                <form className="contact-form">
                    {/* <h1>Contact Us</h1> */}
                    <label htmlFor="fName" className="contact-label">First Name </label>
                    <input type="text" placeholder="Enter First Name" className="contact-input" />
                    <label htmlFor="lName" className="contact-label">Last Name </label>
                    <input type="text" placeholder="Enter Last Name" className="contact-input" />
                    <label htmlFor="email" className="contact-label">Email </label>
                    <input type="email" placeholder="Enter Email" className="contact-input" />
                    <label htmlFor="phone" className="contact-label">Contact Number </label>
                    <input type="number" placeholder="Enter Phone Number" className="contact-input" />
                    <label htmlFor="msg" className="contact-label">Message</label>
                    <textarea name="msg" id="" cols="20" rows="5" className="contact-input"></textarea>
                    <button className="contact-button">Submit</button>
                </form>
            </div>
        </div>
    )
}
export default ContactData;