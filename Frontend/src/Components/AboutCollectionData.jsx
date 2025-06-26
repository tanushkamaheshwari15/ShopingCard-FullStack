import React from "react";
import "./AboutData.css"


function AboutCollectionData(props){
    return(
        <div className="collection-card-data" >
            <h1 className="card-head">{props.name}</h1>
            <img src={props.image} alt="image.." className="card-img"/>
            <p className="card-para">{props.text}</p>
        </div>
    )
}

export default AboutCollectionData;