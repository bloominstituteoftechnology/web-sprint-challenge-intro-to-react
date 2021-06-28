import React, {useState, useEffect} from 'react';
import './App.css';
import Character from '../src/components/Character'
import axios from 'axios'
import styled from 'styled-components'


const App = () => {

  const Container = styled.div
    `
    display: flex;
    justify-content: space-evenly;

    `

 const [character, setCharacter] = useState([])

	useEffect(() => {
		
		axios
		.get('https://swapi.dev/api/people')
		.then(res => {
			console.log(res)
			setCharacter(res.data)
		})
		.catch(err => {
			console.log('something went wrong', err)
		})
	},[])


  return (
    <Container>
			{character.map((char, key) => (<Character key={key} character={char} />))}
		</Container>
  );
}

export default App;
