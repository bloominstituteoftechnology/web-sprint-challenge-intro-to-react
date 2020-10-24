import React from 'react';
import styled from 'styled-components';
import Character from './Character';


function CharacterPage(props){
  console.log(props);
   function formatCharacters(chars){
     chars.map((curr) => {
       return <Character data={curr}/>
    });
  }

  if(!props.data) return <div className="App">Loading ...</div>
    return (
      <div>
          {props.data.map(char =>
            <Character data={char}/>
          )}
      </div>
    );
}
export default CharacterPage;