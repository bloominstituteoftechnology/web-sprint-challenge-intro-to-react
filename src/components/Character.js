// Write your Character component here
import React from 'react';
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
function Character(props){
  console.log(props);
  if(!props.data) return <div className="App">Loading ...</div>
    return (
      <CharSection>
        {props.data.name} | Birth Year : {props.data.birth_year}
      </CharSection>
    );
}
export default Character;