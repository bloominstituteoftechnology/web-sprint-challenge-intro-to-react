// Write your Character component here
import React from 'react';
import styled from 'styled-components';
function Character(props){
  console.log(props);
  if(!props.data) return <div className="App">Loading ...</div>
  
    return (
      <div>
          {props.data.name}
      </div>
    );
}
export default Character;