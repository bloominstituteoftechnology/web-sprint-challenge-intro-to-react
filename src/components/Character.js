// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const Character = ({ character }) => {
	
	const Card = styled.div
		`
		display: flex;
		flex-direction: row;
		justify-content: center;
		padding: 5px;
		margin: 5px;
		`
	const CardTitle = styled.div
		`
		margin:
		`	
	return (
		<Card>
			<CardTitle>
				Name: {character.name}
			</CardTitle>
			<div>
				Height: {character.height}</div>
			<div>
				Movies: {character.films.map((movie, key) => { return (<div key={key}>{movie}</div>) })}
			</div>
		</Card>

	)

	
	
}

export default Character