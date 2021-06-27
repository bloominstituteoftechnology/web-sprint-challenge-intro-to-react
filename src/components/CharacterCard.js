import React from 'react'

const CharacterCard = ({ character }) => {
	return (
		<div>{character.name}
			<div>{character.height}</div>
			
		</div>

	)
}

export default CharacterCard