import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
// import Info from './components/Info';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  // state holds data
  const [char, setChar] = useState([]);

  // requesting date with useEffect
  useEffect(() => {
    axios.get("https://swapi.py4e.com/api/people/")
    .then(res => {
      setChar(res.data.results)
    })
    .catch(err => console.log(err));
   
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {/* mapping through data and passing down data through props */}
      {char.map(char => 
        <Character data={char}/>
      )}
      
    </div>
  );
}

export default App;
