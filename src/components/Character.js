// Write your Character component here
import React, {useState, useEffect} from "react";
import styled from "styled-components"


const Char = (props) => {
    const { people } = props;
    return (
            <StyledChar>
            <div className="container">
                <h1>{people.name} </h1>
                <div className="test">
                    <p>Height: {people.height} {""} Mass: {people.mass}</p>
                    <p>Eye Color: {people.eye_color}</p>
                    <p>Hair Color: {people.hair_color}</p>
                    <p>Skin Color: {people.skin_color}</p>
                </div>
                <h2>Birth Year: {people.birth_year}</h2>
            </div>
            </StyledChar>
    )
}


export default Char

const StyledChar = styled.div`
    
    & .container{
        width: 50%;
        margin: 4% auto;
        background-color: ${(pr) => (pr.theme.black)};
        border: 8px solid;
        border-color:${(pr) => (pr.theme.firstColor)};
        display:flex;
        justify-content:space-evenly;
        align-items:center;
        border-radius: 25px;
    }

    & .test{
        display:flex;
        align-items:center;
        justify-content:center;
        flex-wrap: wrap;
        width:20%;
        padding: 1% 0%;
    }

    p{
        width:90%;
        margin: 0 auto;
        color: ${(pr) => (pr.theme.white)};
        line-height: 25px;
        border-left: 2.5px double ;
        border-right: 2.5px double ;
        border-left-color: ${(pr) => (pr.theme.sith)};
        border-right-color: ${(pr) => (pr.theme.sith)};
    }

    &

    h1{
        color: ${(pr) => (pr.theme.jedi)};
        padding: 10px 0px;
        border: 6px solid;
        border-color: ${(pr) => (pr.theme.sith)};
        width:35%;
    }

    h2{
        display:flex;
        justify-content:center;
        align-items:center;
        width:20%;
        border: 6px solid;
        border-color: black;
        background-color: ${(pr) => (pr.theme.secondColor)};
        padding: 0.5% 1%;
    }

    & h1:hover{
        transform: scale(1.2);
        transition: all 0.8s ease-in-out;
        color: ${(pr) => (pr.theme.firstColor)};
        border-radius: 25px;
    }

    & p:hover{
        color: ${(pr) => (pr.theme.secondColor)};
    }

    
    & h2:hover{
        transform: scale(1.2);
        transition: all 0.8s ease-in-out;
        border-radius: 25px;
        border-color: ${(pr) => (pr.theme.firstColor)};
    }

`
