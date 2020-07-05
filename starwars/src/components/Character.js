// Write your Character component here
import React from "react";
import App from "../App";
import styled from "styled-components";



const WrapperDiv = styled.div`
font-family: cursive;
text-align: center;
border: 1px solid black;

`;


const Characters = ({name, gender, homeworld, img_url}) => {
    return (
        <WrapperDiv className="App">
                <div>
                 <h3>Name: {name}</h3>
                 <h3>Gender: {gender} </h3>
                 <h3>Home: {homeworld}</h3>
                 <img url={img_url} />
                </div>             
        </WrapperDiv>
    )
}
export default Characters;