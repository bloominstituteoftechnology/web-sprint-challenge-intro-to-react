// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
    display: flex;
    width: 30%;
    margin: 1% auto;
    flex-direction: column;
    padding: .5%;
    background: rgba(20, 0, 0, 0.6);
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.4);
    border: 2px solid black;
    border-radius: 5%;
`
const Styledh2 = styled.h2`
    display: flex;
    color: rgba(255, 166, 0, 0.8);
    text-shadow: -1px 0 rgba(255, 0, 0, 0.445), 0 1px rgba(255, 0, 0, 0.445), 1px 0 rgba(255, 0, 0, 0.445), 0 -1px rgba(255, 0, 0, 0.445);
    margin: .5% auto;
`

const Styledh1 = styled.h1`
    display: flex;
    color: darkgray;
    justify-content: center;
    /* padding: 1%; */
    text-decoration: underline;
    text-shadow: -1px 0 rgba(255, 0, 0, 0.445), 0 1px rgba(255, 0, 0, 0.445), 1px 0 rgba(255, 0, 0, 0.445), 0 -1px rgba(255, 0, 0, 0.445);
`
export default function Character(props) {
    return (
        <div>
            {props.chData.map(item => {
                return (
                    <StyledDiv>
                        <Styledh1>{item.name}</Styledh1>
                        <Styledh2>Gender: {item.gender === "n/a" ? "None" : item.gender}</Styledh2>
                        <Styledh2>Born: {item.birth_year}</Styledh2>
                        <Styledh2>Height: {item.height}</Styledh2>
                        <Styledh2>Hair color: {item.hair_color === "n/a" ? "None" : item.hair_color}</Styledh2>
                        <Styledh2>Eye color: {item.eye_color}</Styledh2>
                        <Styledh2>Featured in: {item.films.length <= 1 ? item.films.length + " film" : item.films.length + " films"}</Styledh2>
                    </StyledDiv>
                )
            })}
        </div>
    )
}