import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Character from './components/Character'

const App = () => {
  const [data, setData] = useState([]);
  const fetchData = () =>{
    axios.get('https://swapi.dev/api/people/')
      .then(
        (response)=>{
          console.log(response.data.results);
          setData(response.data.results);
          
        }
      )
  }


  useEffect(fetchData, []);
  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {data.map((element)=>{
           return <Character name={element.name} />
         })} 
      {console.log(data[0])}
    </div>
  );
}

export default App;
