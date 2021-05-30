
import React, { useEffect, useState } from 'react';
import Character from './components/Character'
import { H1} from './components/Example';
import "./App.css";
const axios = require('axios');
function App() {
 const [item , setItem] = useState([])
 useEffect(()=>{
  axios
  .get('https://swapi.dev/api/people')
  .then(res=>{
    console.log(res.data)
    setItem(res.data)
  })
  .catch(err=>{
    console.log("I got something wrong ", err)
  })
 },[])
 return (   
      <div className="App">
         <H1>Characters</H1>
         <Character item={item} />
     </div>
 );
}

export default App;
