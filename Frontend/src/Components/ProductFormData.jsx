import React from "react";
import "./ProductFormData.css";
import addProductImage from "../assets/addProductImage.avif"

function ProductFormData() {
    return (

        <>
            <img src={addProductImage} alt="Background Image.." className="addproduct-image" />
            <form className="product-form">
                <h1 className="product-heading">Add Product</h1>
                <div className="container">
                    <div>
                        <label htmlFor="productName" className="product-label">Product Name:</label>
                        <input type="text" id="productName" placeholder="Enter Product Name" className="product-input" />
                    </div>
                    <div>
                        <label htmlFor="productImage" className="product-label" >Product Image:</label>
                        <input type="file" id="productImage" className="product-image product-input" />
                    </div>
                    <div>
                        <label htmlFor="productCategory" className="product-label">Product Category:</label>
                        <input type="text" id="productCategory" placeholder="Enter Product Category" className="product-input" />
                    </div>
                    <div>
                        <label htmlFor="productPrice" className="product-label">Product Price:</label>
                        <input type="number" id="prouctPrice" placeholder="Enter Product Price" className="product-input" />
                    </div>

                    <div>
                        <label htmlFor="description" className="product-label">Product Description:</label>
                        <textarea id="description" placeholder="Enter Your Product Description" rows="1.5" cols="30" className="product-input"></textarea>
                    </div>

                    <div>
                        <label htmlFor="delivery" className="product-label">Free Delivery:</label>
                        <select name="Delivery" id="delivery" className="product-input">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="ratings" className="product-label">Ratings:</label>
                        <input type="number" id="ratings" placeholder="Enter Your Product Rating 1 - 5" className="product-input" />
                    </div>

                    <button className="product-button">Create Product</button>
                </div>
            </form>
        </>
    )
}
export default ProductFormData;