import React from "react";
import styled from "styled-components";
import {
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	CardImageHeader,
	CardText,
	CardTitle,
} from "styled-card-component";

const StyledCard = styled(Card)`
   width 350px;
   margin: 0 auto;
   height: 600px
`;

const StyledCardText = styled(CardText)`
	padding: 3rem 0;
	line-height: 1.3rem;
`;

const Character = (props) => {
	const { character } = props;

	const setStatus = () => {
		switch (character.status) {
			case "Alive":
				return <span className="alive">Alive</span>;
			case "Dead":
				return <span className="dead">Dead</span>;
			case "unknown":
				return <span className="unknown">Unknown</span>;

			default:
				return <h1>error</h1>;
		}
	};
	return (
		<StyledCard>
			<CardImageHeader src={character.image} alt="Character Image" />
			<CardBody>
				<CardHeader>
					<h3>{character.name}</h3>
				</CardHeader>
				<StyledCardText>
					<span className="bold">Species:</span> {character.species}
					<br />
					<span className="bold">Gender:</span> {character.gender}
					<br />
					<span className="bold">Origin:</span> {character.origin.name}
					<br />
					<span className="bold">Location:</span> {character.location.name}
					<br />
					<span className="bold">Status:</span> {setStatus()}
					<br />
				</StyledCardText>
			</CardBody>
		</StyledCard>
	);
};

export default Character;
