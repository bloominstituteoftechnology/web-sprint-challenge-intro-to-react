import React, { useState, useEffect} from 'react';
 import Character from './components/Character'
import './App.css';
const App = () => {  
  let arr=[]
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [list, setList] = useState([])
const url = `https://swapi.dev/api/people/`; 
useEffect(()=>{
 
  fetch(url)
  .then(res=>{
    return  res.json()
  })
  .then(res=>{
   res.map(item=>{
     arr.push(item.name) 
   })
      setList(arr)
  
  })
  
  .catch(err=>{
  console.log("something went wrong")
  })
  },[]) ; 
  
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  let y = list.map((x,i)=>{
    return (
      <div className="App">
          <h1 className="Header">Characters</h1>   
           <Character name= {list[i]}/>
       </div>
    )
  })
  return y;
}

export default App;
