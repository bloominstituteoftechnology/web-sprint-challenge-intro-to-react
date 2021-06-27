import React, {useState, useEffect} from 'react';
import './App.css';
import Character from '../src/components/Character'
import axios from 'axios'

const App = () => {
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
    <div>
			{character.map((char, key) => (<Character key={key} character={char} />))}
		</div>
  );
}

export default App;
