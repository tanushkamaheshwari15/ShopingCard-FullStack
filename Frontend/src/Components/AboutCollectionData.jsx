import React from "react";
import "./AboutData.css"


function AboutCollectionData(props){
    return(
        <div>
            <h1>{props.name}</h1>
            <img src={props.image} alt="image.." />
            <p>{props.text}</p>
        </div>
    )
}

export default AboutCollectionData;