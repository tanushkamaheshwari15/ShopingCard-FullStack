import React from "react";
import "./AboutData.css"
import AboutCollectionData from "./AboutCollectionData";
import image1 from "../assets/collectionImage1.jpg";
import image2 from "../assets/collectionImage2.webp";
import image3 from "../assets/collectionImage3.jpg";

function AboutData() {
    return (
        <>
            <div className="about-page">
                <div className="about-image-container">
                    <img src="https://t3.ftcdn.net/jpg/06/32/90/44/360_F_632904407_iPLi90WdjZ0oKAeRiL98gEIeHIUtzWae.jpg" alt="Image.." className="about-image" />
                    <img src="https://i.pinimg.com/736x/31/f2/89/31f289e7a1b73ade73051f206550bb03.jpg" alt="image4" className="about-image" />
                    <img src="https://img.freepik.com/free-vector/3d-supermarket-cart-shopping-bags-blank-banner-background-vector-realistic-illustration-pink-shop-trolley-goods-retail-business-online-store-promo-flyer-sale-discount-advertising_107791-24419.jpg?semt=ais_hybrid&w=740" alt="Image.." className="about-image" />
                    <img src="https://www.shutterstock.com/image-vector/online-shopping-store-mobile-cart-260nw-2097680029.jpg" alt="image3" className="about-image" />
                </div>
                <div className="about-page-text">
                    <h1 className="about-page-heading">Welcome to E-Commerce</h1>
                    <h3 className="about-page-subHeading">Your One-Stop Destination for Quality, Style & Convenience</h3>
                    <p className="about-page-para">We’re not just an online store – we’re your new favorite way to shop</p>
                    <button>Get More Info</button>
                </div>
            </div>

            <div className="about-collection">
                <h1 className="collection-h1">What You'll Find Here !</h1>
                <h3 className="collection-h4">From everyday essentials to hidden gems, we offer a wide collection of</h3>
                <div className="collection-card">
                    <AboutCollectionData name="Trendy Fashion & Accessories" image={image1} text="Step into style with our curated fashion collection for men, women, and kids. From casual streetwear to statement pieces, we bring you the latest trends, timeless classics, and must-have accessories – all at prices you’ll love." />
                    <AboutCollectionData  name=" Smart Electronics & Gadgets" image={image2} text="Upgrade your everyday with our range of cutting-edge electronics and smart gadgets. Whether it's the newest headphones, power banks, home automation devices, or mobile accessories – we've got the tech to keep you connected, productive, and entertained." />
                    <AboutCollectionData  name="Unique Gifts & Lifestyle Items" image={image3} text="Looking for something special? Discover quirky, thoughtful, and one-of-a-kind gifts perfect for every occasion – birthdays, anniversaries, or “just because.” Make every moment memorable with items that inspire smiles." />
                </div>
            </div>

        </>
    )
}
export default AboutData;