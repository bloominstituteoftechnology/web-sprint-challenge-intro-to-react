// Write your Character component here
import React from "react";
import App from "../App";


const Characters = ({name, gender, homeworld, img_url}) => {
    return (
        <div className="App">
                <div>
                 <h3>Name: {name}</h3>
                 <h3>Gender: {gender} </h3>
                 <h3>Home: {homeworld}</h3>
                 <img url={img_url} />
                </div>             
        </div>
    )
}
export default Characters;