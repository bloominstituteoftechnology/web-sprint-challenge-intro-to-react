import React,{useEffect,useState} from 'react';
import styled from "styled-components";
import './App.css';
import Character from './components/Character';
import axios from 'axios';

const urlB = ["https://swapi.dev/api/"]
const thing = ["people/"]


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [count,setCount] = useState(1);
  const [reqG, setReqG] = useState({});
  const [reqA, setReqA] = useState([]);
  const [reqGa, setReqGa] = useState([{}]);
  

  useEffect( () =>{

    
    axios.get(urlB[0]+thing[0]+count+"/?limit=20")
    .then( (re) =>{
      
        setReqG(re);
        // aa = [];
      let aa = Object.entries(re.data);
      console.log(aa);
       setReqA(aa);
       let bb = [];
       bb.push(re.data);
       setReqGa(bb);
      
      console.log(re.data);
      let c = count + 1;
      setCount(c);
    })
    .catch( (er1) =>{
      console.log(er1);
    })
  
  },[])


  return (
   <div>


      {

  
   
    
      reqGa.map( (e,i) =>{
      return  <Character key={e} name={e.name} dob={e.birth_year} gender={e.gener} mass={e.mass}/>
      })
    


        
      }
          

   </div>
  );
};

export default App;
