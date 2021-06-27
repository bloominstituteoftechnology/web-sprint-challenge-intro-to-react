// Write your Character component here
import React from 'react'

const Character = ({character}) => {

	return (
		<div>Name: {character.name}
			<div>Height: {character.height}</div>
			Movies: {character.films.map((movie, key) => { return (<div key={key}>{movie}</div>)})}
		</div>

	)

	
	
}

export default Character