import React, {useState} from 'react';
// import BASE_URL from './components/constants';
import './App.css';
// import axios from 'axios';
import Header from './components/Header';
import CharactersList from './CharactersList';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);
  const people = 'people/';
  const sequence = (Math.floor(Math.random() *50) + 1);
  // const string = `${BASE_URL}${people}${sequence}`;

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  // useEffect(() => {
  //   const fetchData = () => {
  //   axios
  //     .get(string)
  //       .then((res) => {
  //         const array = []
  //         array.push(res.data);
  //         setCharacters(array); 
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //     }
  //     fetchData();
  //   },[]);
  //   console.log(characters);

  return (
    <div className="App">
      <Header />
      <CharactersList />
    </div>
  );
}

export default App;
