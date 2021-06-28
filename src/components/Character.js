// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const Character = ({ character }) => {

	const CardBody = styled.div
		`
		border: #000 solid 1px;
		width: 200px;
		height: 200px;
		margin: 5px;
		font-size: 16px;
		padding: 3px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		color: #fff;
		background-color: #99b3e6;
		`
	
	
	const CardTitle = styled.div
		`
		font-size: 20px;
		`	
	return (
		<container>
			<CardBody>
				<CardTitle>
					Name: {character.name}
				</CardTitle>
				<div>
					Movies: {character.films.map((movie, key) => { return (<div key={key}>{movie}</div>) })}
				</div>
			</CardBody>
		</container>

	)

	
	
}

export default Character