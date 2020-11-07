// Write your Character component here
import React from "react"
import styled from "styled-components"

export default function Character(props) {
    console.log('look', props)

    return (
        <CharacterStyle>
            <Name>{props.name}</Name>
            <h2>{props.birth_year}</h2>
            <div className="bottom">
                <p>Has been in {props.fimls} movies</p>
                <p>Starships{props.starships}</p>
                <p>Vehicles</p>
            </div>
        </CharacterStyle>
    )
};

const CharacterStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #529752;
`
const Name = styled.h2`
    color:red;
    font-size: bolder;
    opacity: 50%;
`

// const Button = styled.Button`
//     color: whitesmoke;
//     background-color : black: 
//     border: 1px solid black;
//     border-radius: 6px;
//     padding: 5%;
//     text-align: "center";
//     width: 100%;
// `;

// const Character = ({ pokeData }) => {
//     console.log("poke props", pokeData);
//     return (
//         <Cards>
//             <h2 style={{ textAlign: "center", fontSize: 30, width: "100%" }}>
//                 name: {pokeData.name}(" ")
//             </h2>
//             <br />
//             <Button
//                 onClick={() => {
//                     window.open(pokeData.url);
//                 }}
//             >
//                 [" "]
//                 Learn More
//             </Button>
//         </Cards>
//     );
// };


