import React from "react";
import Home from "./routes/Home";
import About from "./routes/About";
import AddProduct from "./routes/AddProduct";
import Contact from "./routes/Contact";
import Login from "./routes/Login";
import { Routes, Route } from "react-router-dom";
import SignUp from "./Components/SignUp";
import Navbar from "./Components/Navbar";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/addproduct" element={<AddProduct />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login/>}/>
                <Route path="/SignUp" element={<SignUp/>}/>
            </Routes>
        </div>


    )
}
export default App;