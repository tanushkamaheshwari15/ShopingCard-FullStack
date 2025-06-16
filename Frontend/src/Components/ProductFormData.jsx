import React from "react";
import "./ProductFormData.css";

function ProductFormData() {
    return (
        <form>
            <h1>Add Product</h1>
            <div className="container">
                <div>
                    <label htmlFor="productName">Product Name:</label>
                    <input type="text" id="productName" placeholder="Enter Product Name" />
                </div>
                <div>
                    <label htmlFor="productImage">Product Image:</label>
                    <input type="file" id="productImage" className="product-image" />
                </div>
                <div>
                    <label htmlFor="productCategory">Product Category:</label>
                    <input type="text" id="productCategory" placeholder="Enter Product Category" />
                </div>
                <div>
                    <label htmlFor="productPrice">Product Price:</label>
                    <input type="number" id="prouctPrice" placeholder="Enter Product Price" />
                </div>

                <div>
                    <label htmlFor="description">Product Description:</label>
                    <textarea id="description" placeholder="Enter Your Product Description" rows="1.5" cols="30"></textarea>
                </div>

                <div>
                    <label htmlFor="delivery">Free Delivery:</label>
                    <select name="Delivery" id="delivery">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="ratings">Ratings:</label>
                    <input type="number" id="ratings" placeholder="Enter Your Product Rating 1 - 5" />
                </div>

                <button>Create Product</button>
            </div>

        </form>
    )
}
export default ProductFormData;