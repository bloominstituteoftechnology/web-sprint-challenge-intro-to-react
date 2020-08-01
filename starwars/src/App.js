import React, {useEffect, useState} from 'react';
import './App.css';
import axios from "axios";
import Character from './components/Character';



const App = () => {
  const [state, setState] = useState(0);
  const [otherState, setotherState] = useState(0)

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  useEffect(() => {
    console.log("test")
  }, [])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <h1>hello</h1>
    </div>
    <Character/>
  );
}

export default App;