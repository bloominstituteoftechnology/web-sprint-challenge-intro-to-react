// Write your Character component here
import React from 'react';
import styled from 'styled-components';


const Character = props =>{
    return(
        <CardStyle>
            <img src={props.image} alt="Character Avatar" />
            <div>
                <h4>{props.name}</h4>
                <h5>Species</h5>
                <p>{props.species}</p>
                <h5>Origin:</h5>
                <p>{props.origin}</p>
                <h5>Status:</h5>
                <p>{props.status}</p>
            </div>
        </CardStyle>
    )

}

export default  Character;

const CardStyle = styled.div`
    
    background-color: silver;
    font-family: 'Black Han Sans', sans-serif;
    border: solid 2px #black;
    text-align: left;
    width: 20%;
    padding 10px;
    margin: 15px;
    box-shadow: 0 4px 8px 5px black;
    border-radius: 5px;

    div{
        background-color:black;
        padding: 5px;
        margin: 5px;
        color: #97ce4c;
        border-radius: 8px;  
    }
    
    h4{
        text-align: center;
        margin-top: 5px;
        font-size: 2rem;
    }

    h5{
        font-size: 1.5rem;
    }

    P{
        font-family: 'Do Hyeon', sans-serif;
        font-size: 2rem;
    }

    img {
        width: 95%;
        border-radius: 5px;
        border: solid 2px black;
        margin: 5px;
    }
`;