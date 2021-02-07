import React from 'react'
import styled from 'styled-components';

const CARD = styled.div`
	background: black;
	color: white;
	width: 350px;
	height: 300px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	margin: 5px;
	padding-bottom: 35px;
	border-radius: 15px;
`;

function Character(props){
     return(
          <CARD>

          <h2>{props.name}</h2>
          <p>
               Gender: {props.gender}
          </p>
               Birth Year:  {props.birth_year}
          </CARD>

     )
}

export default Character;
