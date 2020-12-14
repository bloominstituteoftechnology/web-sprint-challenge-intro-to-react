import React, { useState, useEffect } from 'react';
import axios from "axios";
import Character from "./components/Character";

import './App.css';

export default function App() {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [character, setCharacters] = useState([]);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
      axios.get('https://rickandmortyapi.com/api/character')
      .then(res => {
        console.log(res.data.results);
        setCharacters(res.data.results);
      })
      .catch((err) => {
        console.log("Loading", err)
      })
  }, [])

//   return (
//     <div className="App">
//       <h1 className="Header">Characters</h1>
//       {character.map(item => 
//         <Character eachCharacter={item} key={item.id}/>
//       )
//       })}
//     </div>
//   );
// }



// another way to export is declaring inline in font of function
//export default cont App = () => {}


// return (
//   <div className=“App”>
//     <div className=“Header”>Characters</div>
//     {character.map(item  =>
//           <Character eachCharacter={item} key = {item.id}/>
//     )}
//   </div>
// );

return (
  <div className="App">
    <h1 className="Header">Characters</h1>
    {character.map((fn) => {
      return <Character key={fn.id} character={fn}/>
      
    })

    }
  </div>	    
);	 
}	