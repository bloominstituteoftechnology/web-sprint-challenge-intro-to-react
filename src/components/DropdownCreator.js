import React, {useState} from "react";
import styled from "styled-components";

const Styledlist = styled.div`
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 4%;
    padding-top: 1%;
    padding-bottom: 8%;
    flex-direction: column;
    width: 15%;
    background-color: rgba(143,67,33,0.5);
    overflow: hidden;
    border: double;
    border-left: none;

    h3{
        margin-left: 10%;
        margin-top: 14%;
        text-align: left;
        border: double;
        width: 50%;
        font-family: 'Space Grotesk', sans-serif;
        :hover {
            transform: scale(1.1);
        }
        :active {
            transform: scale(1);
        }
    }

`;

const DropdownCreator = (props) => {
    const { characters, setCurrentCharacter } = props;
    function openCharacter (name) {
        {characters.map(ch => {
            if(ch.name === name){
                setCurrentCharacter(ch)
            }
        })}
    }

    function generator (name,idx) {
        return (
            <h3 onClick={() => openCharacter(name)} key={idx}>{name}</h3>
        )
    
    }

    return(
        <Styledlist>
            <div>
                { characters && characters.map((ch,idx) => { return generator(ch.name,idx)})}
            </div>
            
        </Styledlist>

    )
}

export default DropdownCreator