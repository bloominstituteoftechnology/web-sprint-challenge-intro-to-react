import React, { useState, useEffect } from 'react';
import './App.css';
import axios from'axios'
import Character from'./components/Character'


const App = () => {
  const [data, setData] = useState([]);

   useEffect(() => {
       axios
       .get("https://swapi.dev/api/people/")
       .then(res => {setData(res.data)})
       
    }
   , ["https://swapi.dev/api/people/"]);
  

  return (
    <div className="App">
       {data.map(ele => {
         return <Character data={ele}/>
       }
       )}

    </div>
  );
}

export default App;
