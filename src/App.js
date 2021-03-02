import React,{useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import CharacterCreator from './components/Character'


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [array,setArray] = useState([]);
  const [makeTrue, setMakeTrue] = useState(false);

  // Mocking doesn't allow me to work with all characters so i asked instructor and he told me to work with it
  useEffect(() =>{
    const fetchData = () => {
      axios
      .get('https://swapi.dev/api/people/')
      .then(res => {
        // console.log(res);
        // console.log(res.data);
          setArray(res.data);
        }
  )
      .catch(err => {
          console.log(`ERROR! ${err}`)
      })
    }
    fetchData()
  },[]);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <CharacterCreator array={array} makeTrue={makeTrue} setMakeTrue={setMakeTrue}/>
    </div>
  );
}

export default App;
