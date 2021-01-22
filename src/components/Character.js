import React from "react";
import styled from "styled-components";

function Character(props) {
	// console.log(typeof props);
	// console.log(props);

	const { characterdata } = props;

	return (
		<StyledCharacterDiv>
			<StyledCharacterH1>Name: {characterdata.name}</StyledCharacterH1>
			<img alt="" src={characterdata.image}></img>
			<StyledDiv>
				<StyledCharacterP>Gender: {characterdata.gender}</StyledCharacterP>
				<StyledCharacterP>Species: {characterdata.species}</StyledCharacterP>
				<StyledCharacterP>
					Dead or Alive!!!:{characterdata.status}
				</StyledCharacterP>
				<StyledCharacterP>Created:{characterdata.created}</StyledCharacterP>
			</StyledDiv>
		</StyledCharacterDiv>
	);
}
const StyledDiv = styled.div`
display:flex
flex-direction:column;`;

const StyledCharacterDiv = styled.div`
    display
	width: 20vh;
	height: 15rem;
`;
const StyledCharacterH1 = styled.h1`
	color: white;
`;
const StyledCharacterP = styled.p``;

export default Character;
