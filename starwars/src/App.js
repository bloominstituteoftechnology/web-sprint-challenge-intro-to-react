import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios'
import CharacterInfo from './components/Character'
import Styled from './components/Styles'




const App = () => {
  
  const [info, setInfo] = useState([])
  const [results, setResults] = useState([])
  const [search, setSearch] = useState('')

useEffect (() => {
  axios.get(`https://rickandmortyapi.com/api/character/?name=${search}`)
    .then((response) => {
      setInfo(response.data.info)
      setResults(response.data.results)
    }, [search])
    .catch((error) => {
      console.log(error)
    }, [])
})


  return (
    // <div className="App">
    //   <h1 className="Header">Characters</h1>
    // </div>
    <Styled>
      <header>
        <h1>Rick and Morty Characters</h1>
        <input onChange= {(event) => {
          setSearch(event.target.value)

        }}
        value={search}
        type='text'
        placeholder='Search'
        />
        </header>
        <div className = 'main-container'>
          {results.map((result, index) => (
            <CharacterInfo key = {index} result = {result}/>
          ))}
        </div>
      </Styled>
  );
}

export default App;
