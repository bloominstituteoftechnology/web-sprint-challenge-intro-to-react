import React, { useState, useEffect} from 'react';
 import Character from './components/Character'
import './App.css';
const App = () => {  
  let arr=[]
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [list, setList] = useState([])

useEffect(()=>{
  fetch(`https://swapi.dev/api/people`)
  .then(res=>{
    return  res.json()
  })
  .then(res=>{
   res.map(item=>{
    return arr.push(item.name) 
   })
    setList(arr) 
  })
  
  .catch(err=>{
  console.log("something went wrong")
  })
  console.log("ARRAY ")
  },[]) ; 
  
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  let char = list.map((x,i)=>{
    return (
      <div key={i}className="App">
          <h1 className="Header">Characters</h1>   
           <Character name= {list[i]}/>
       </div>
    )
  })
  return char;
}

export default App;
