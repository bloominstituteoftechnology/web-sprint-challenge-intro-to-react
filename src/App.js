import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import { ListGroup, ListGroupItem } from 'reactstrap';
import styled from 'styled-components';

const App = () => {
  const [characterData, setCharacterData] = useState([]);
  
  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/`)
      .then(res => {
        setCharacterData(res.data.results);
        console.log("fetch data: ", res.data.results); //We're setting the resolution to data, because that is the property you want from the API that will give me the list of characters.
        //Then you will set the res.data to setCharacterData, setting the data to state so we can use it.
      })
      .catch(err => console.log(err));
      
  }, []); 
  console.log("Data: ", characterData);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <Container className='dog'>
      <ListGroup>
        <h1 className='Header'>Characters</h1>

          {characterData.map(character => {
            return (
              <ListGroupItem>
                <Character name={character.name} birthYear={character.birth_year}/>
              </ListGroupItem>
          );
        })} 
      
      </ListGroup>
    </Container>
  );
}

export default App;

const Container = styled.div `
  display: flex;
  justify-content: center;
  width: 100%;
`

///you can use ternary expressions in styled components vs. not being able to in css files. 
//Styling can be done in a variety of ways, css, libraries (reactstrap, styledcomponents, etc), libraries will always 
//be changing, but having a good understanding of CSS will make it easier to comphrehend.
/*You can use styling components/styling within the js files with react, but ALSO be sure to 
style within the CSS pages for your app & index (the index for the overall page, the app page for everything else)
It's a combo of everything, and how you style depends on how your company styles/your own approach*/ 
