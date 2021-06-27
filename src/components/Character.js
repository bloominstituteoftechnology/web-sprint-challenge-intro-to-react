// Write your Character component here
import React, { useState, useEffect } from 'react'
import axios from 'axios'



const Character = () => {
	const [character, setCharacter] = useState([])

	useEffect(() => {
		
		axios
		.get('https://swapi.dev/api/people')
		.then(res => {
			console.log(res)
		})
		.catch(err => {
			console.log('something went wrong', err)
		},[])
	})


	return (
		<div> hello from character </div>
	)
}

export default Character