import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import styled from 'styled-components';
import Details from './components/Details';

const App = () => {

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [starFolk,setStarFolk] = useState(null);
  const [buttonOpen, setButtonOpen]= useState(null)
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
    
  const openDetails = id =>
  {
      const character = starFolk.filter(item => item.id === id);
      setButtonOpen(character);
  };

  const closeDetails = () =>
  {
      setButtonOpen(null);
  };



  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
    .then(res => {
      setStarFolk(res.data.results);
      setStarFolk(res.data);

      const characters = res.data;

                let id = 1;
                characters.forEach(item => item.id = id++);
                console.log(characters);
                setStarFolk(characters);
    })
    .catch(err => {
      console.error(err)
    })
  }, []);

 
  
  const StarDiv = styled.div`
  margin: 0 auto;
  box-sizing: border-box;
  width: 50%;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  
  margin-bottom:10%;

  button {
    width: 30%;
    margin-left:35%;
  }
  
`
 
  return (
    <div className="App">
    <h1 className="Header">Characters</h1>
    <StarDiv>
    {
       starFolk &&
       starFolk.map(info =>
       {
           return <Character key={info.name}
               info={info}
               openDetails={openDetails}
               closeDetails={closeDetails} />;
       })
   }
   {
       buttonOpen && <Details info={buttonOpen} closeDetails={closeDetails} />
    }
    </StarDiv>
    </div>
  );
};

export default App;
