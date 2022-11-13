import React, {useState} from "react";
import styled from "styled-components";

const Styledlist = styled.div`
    display: flex;
    padding-top: 1%;
    padding-bottom: 8%;
    flex-direction: column;
    width: 15%;
    background-color: rgb(153, 0, 0,0.3);
    overflow: hidden;

    h3{
        margin-left: 10%;
        margin-top: 14%;
        text-align: left;
        border: solid;
        width: 40%;
    }

`;

function generator (name,idx) {
    return (
        <h3 onClick={() => console.log('hello')} key={idx}>{name}</h3>
    )

}

const DropdownCreator = (props) => {
    const { characters } = props;
    // console.log(characters)

    return(
        <Styledlist>
            <div>
                { characters.map((ch,idx) => { return generator(ch.name,idx)})}
            </div>
            
        </Styledlist>

    )
}

export default DropdownCreator