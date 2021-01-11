import React, {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import data from './dummyData.js';


console.log(data)

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.



  // axios.get('https://swapi.py4e.com/api/people/')
  //     .then( result => {
  //         console.log(result)
  //       })
  //     .catch( err => console.log(err))  

  

  // while (url !== null){
  //   axios.get(url)
  //     .then( result => {
  //         let {data} = result;
  //         console.log(data.next)
  //         url = data.next
  //       })
  //     .catch(error => console.log(error))
  // }
  


  return (
    <div className="App">
      <h1 className="Header">Starwars Characters</h1>
    </div>
  );
}

export default App;
