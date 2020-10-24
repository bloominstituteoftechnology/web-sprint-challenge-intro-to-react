// Write your Character component here
import React, {useState} from 'react';
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
    padding: .5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    color:white;
    position: fixed;
    right: 250px;
    top: 20px;
    font-size: 20px;

    ${props => (props.clicked ? `visibility:visible;` : `visibility:hidden;`)}
`
function Character(props){
  const [clicked, setClicked] = useState(false);
  console.log(props);
  if(!props.data) return <div className="App">Loading ...</div>
    return (
    <>
      <CharSection onClick={() => setClicked(!clicked)}>
        {props.data.name}
      </CharSection>
      <MoreDetails clicked={clicked}>
        Birth Year: {props.data.birth_year} <br/>
        Eye Color: {props.data.eye_color} <br/>
        Number of Films: {props.data.films.length} <br/>
        Gender: {props.data.gender} <br/>
        Skin Color: {props.data.skin_color}

      </MoreDetails>
    </>
    );
}
export default Character;