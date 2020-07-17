import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Character from './components/Character';
import Styled from 'styled-components';
import './App.css';



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [data, setData] = useState()
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get(`http://swapi.dev/api/people/?page=1`)
      .then(resp => {
        setData(resp.data.results)
        console.log('DATA', resp.data.results)
      })
      .catch(err => console.log(err))
  }, [])
console.log('CHARACTERS', data)
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {data && <Character list = {data} />}
    </div>
  );
}

export default App;
