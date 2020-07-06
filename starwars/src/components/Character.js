// Write your Character component here
import React from "react";
import styled from "styled-components";

const Characters=({name,bday,gender,height,weight,hair,eye})=>{
    const CardDiv=styled.div`
        border-radius:10%;
        width:200px;
        text-align:center;
        border: white 3px solid;
        margin-left:34rem;
        margin-bottom:1rem;
        overflow:auto;
        `;
        const TopCard=styled.div`
        // text-shadow: 1px 1px 5px #fff;
        text-align:center;
        background:black;
        color:white;
        

        `;
        const BottomCard=styled.div`
        text-align:center;
        font-size:14px;
        text-shadow: 1px 1px 5px #fff;
        `;

    return( 
        <CardDiv>
            <TopCard>
                <h4>{name}</h4>
            </TopCard>
            <BottomCard>
                <p>Born/Created: {bday}</p>
                <p>Gender: {gender}</p>
                <p>Height: {height} cm</p> 
                <p>Weight: {weight} kilograms</p>
                <p>Hair Color: {hair}</p>
                <p>Eye Color: {eye}</p>
            </BottomCard>
        </CardDiv>
        );
};

export default Characters;