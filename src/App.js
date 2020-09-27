import React,{useEffect,useState} from 'react';
import styled from "styled-components";
import './App.css';
import Character from './components/Character';
import axios from 'axios';

const urlB = ["https://swapi.dev/api/"]
const thing = ["people/"]


const App = () => {
  const D = styled.div`
      display:flex;
      justify-content:center;
      align-items:center;
        width:98%;
        
        height:100%;
        box-shadow: 1px 1px 0px black;
        background-color:tan;
        margin-right: 1rem ;
        margin-left:1rem;
        

`;
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [count,setCount] = useState(2);
  const [reqG, setReqG] = useState({});
  const [reqA, setReqA] = useState([]);
  const [reqGa, setReqGa] = useState([{}]);
  

  useEffect( () =>{
    let bb = [];

    let c = 0;
    for(let tm = 1; tm <= 8; tm++){
      axios.get(urlB[0]+thing[0]+tm+"/")
    .then( (re) =>{
      
        setReqG(re);
        // aa = [];
      let aa = Object.entries(re.data);
      console.log(aa);
       setReqA(aa);
       
       bb.push(re.data);
       setReqGa(bb);
      
      console.log(re.data);
      c = count + 1;
      setCount(c);
    })
    .catch( (er1) =>{
      console.log(er1);
    })
    }
  
  },[])


  return (
   <D>


      {

  
   
    
      reqGa.map( (e,i) =>{
      return  <Character key={i} name={e.name} dob={e.birth_year} gender={e.gender} mass={e.mass}/>
      })
    


        
      }
          

   </D>
  );
};

export default App;
