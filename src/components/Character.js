// Write your Character component here
import React, {useState} from 'react';
import {Collapse} from 'reactstrap'
import styled from 'styled-components';
const CharSection = styled.div`
    background-color: black;
    width: 800px;
    color: yellow;
    border: 2px solid yellow;
    padding: .75em;
    font-size: 20px;
    margin: .5em auto;
`
const MoreDetails = styled.div`
    background-color: black;
    color: yellow;
    width: 800px;
    color: yellow;
    border: 2px solid yellow;
    margin: 0 auto;
    font-size: 18px;
    padding: .5em;
`

function Character(props){
  console.log(props);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  if(!props.data) return <div className="App">Loading ...</div>
    return (
    <>
      <CharSection onClick={toggle}>
        {props.data.name}
      </CharSection>
      <Collapse isOpen={isOpen}>
        <MoreDetails>
            Birth Year: {props.data.birth_year} <br/>
            Eye Color: {props.data.eye_color} <br/>
            Number of Films: {props.data.films.length} <br/>
            Gender: {props.data.gender} <br/>
            Skin Color: {props.data.skin_color}
        </MoreDetails>
      </Collapse>
    </>
    );
}
export default Character;