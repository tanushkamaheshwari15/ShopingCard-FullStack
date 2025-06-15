import React from "react";
import "./addProduct.css";

function AddProduct() {
    return (
        <form>
            <h1>Add Product</h1>
            <div className="container">
                <div>
                    <label htmlFor="productName">Product Name:</label>
                    <input type="text" id="productName" />
                </div>
                <div>
                    <label htmlFor="productImage">Product Image:</label>
                    <input type="file" id="productImage" />
                </div>
                <div>
                    <label htmlFor="productCategory">Product Category:</label>
                    <input type="text" id="productCategory" />
                </div>
                <div>
                    <label htmlFor="productPrice">Product Price:</label>
                    <input type="number" id="prouctPrice" />
                </div>

                <label htmlFor="description">Product Description:</label>
                <textarea id="description" placeholder="Description"></textarea>

                <div>
                    <label htmlFor="delivery">Free Delivery:</label>
                    <select name="Delivery" id="delivery">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="ratings">Ratings:</label>
                    <div class="star-rating">
                        <input type="radio" id="star5" name="rating" value="5" />
                        <label for="star5"></label>
                        <input type="radio" id="star4" name="rating" value="4" />
                        <label for="star4"></label>
                        <input type="radio" id="star3" name="rating" value="3" />
                        <label for="star3"></label>
                        <input type="radio" id="star2" name="rating" value="2" />
                        <label for="star2"></label>
                        <input type="radio" id="star1" name="rating" value="1" />
                        <label for="star1"></label>
                    </div>
                </div>
                <button>Submit</button>
            </div>

        </form>
    )
}

export default AddProduct;