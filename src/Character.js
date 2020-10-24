import React from "react";
import styled from "styled-components"

const Character = props => {
const { characterData } = props;

const CharacterCard = styled.div`
	font-size: 1.5rem;
	background-color: black ;
	width: 40%;
	margin: 0 auto;
	margin-bottom:2%;
	color: lightgray;
	padding: 0.2%;
	border: 3px solid brown;
`
const CharacterName = styled.h2`
color: red;

`
const CharacterInfo = styled.p`
text-align: center;
` 

console.log(characterData)
	return (
		<CharacterCard>
			<CharacterName>
				{characterData.name}
			</CharacterName>
			<CharacterInfo>{`height: ${characterData.height}`}</CharacterInfo>
			<CharacterInfo>{`mass: ${characterData.mass}`}</CharacterInfo>
			<CharacterInfo>{`gender: ${characterData.gender}`}</CharacterInfo>
			<CharacterInfo>{`birth year: ${characterData.birth_year}`}</CharacterInfo>
		</CharacterCard>
	)

}

export default Character;
