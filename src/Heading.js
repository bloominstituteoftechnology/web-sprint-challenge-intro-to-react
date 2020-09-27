import React from 'react';
import styled from "styled-components";
import './App.css';
const Heading = () => {
    // Try to think through what state you'll need for this app before starting. Then build out
    // the state properties here.
  
    // Fetch characters from the API in an effect hook. Remember, anytime you have a 
    // side effect in a component, you want to think about which state and/or props it should
    // sync up with, if any.
  
    return (
      <div className="App">
        <h1 className="Header">Characters</h1>
        
      </div>
    );
  }
  
  export default Heading;