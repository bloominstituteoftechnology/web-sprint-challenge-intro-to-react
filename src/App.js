import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { Characters } from './components/characters'

const App = () => {
  const [deathStick, setDeathStick] = useState([]);
  let deathstick = useRef();

  useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
      .then((doc) => {
         setDeathStick(doc.data.results);
     }).catch((error) => alert(error));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deathstick])

  return (
    <div className="App">
      {(deathStick !== []) && <Characters className="Header" data={deathStick}><h1>Characters</h1></Characters>}
    </div>
  );
}

export {
  App
}
