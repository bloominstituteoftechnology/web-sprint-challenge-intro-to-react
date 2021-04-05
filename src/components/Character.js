// Write your Character component here
import React from "react";
import "../App.css";
import styled from "styled-components";

const Character = (props) => {
	const { name } = props;

	const Cards = styled.div`
		height: 60px;
		width: 300px;
		background-color: white;
		margin: 5px;
		display: grid;
		place-items: center;
	`;

	const Content = styled.div`
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	`;

	return (
		<div>
			<Content>
				{name.map((e) => {
					return <Cards key={e}>{e}</Cards>;
				})}
			</Content>
		</div>
	);
};

export default Character;

/**/
