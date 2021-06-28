import axios from 'axios'
import React, {useEffect, useState} from 'react'
import CharactersList from './components/Character';

function App() {
  const [baseURL] = useState('https://swapi.dev/api/people')
  const [characters, setCharacters] = useState([])

  useEffect(()=>{
    axios.get(baseURL)
      .then((res)=> {
        console.log(res.data.results)
        setCharacters(res.data.results)
        
      })
        .catch(err => {console.log(console.error)})

  },[])

  console.log(characters)

  return (
    <div className="App">

      <header>


      </header>

      <main>
        <CharactersList myName ="Esteban" myAge="42" mySaying ="6" characters={characters} />

      </main>

      <footer>
        &copy: 2021 what is the heck this industries llc

      </footer>


    </div>
  );
}

export default App;