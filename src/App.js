import React from 'react';
// import BASE_URL from './components/constants';
import './App.css';
// import axios from 'axios';
import Header from './components/Header';
import Character from './components/Character';
import styled from 'styled-components';

const Container = styled.div`
width: 1000px;
margin: 20px auto;
border: 1px solid rgb(210, 210, 210);
box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
padding: 12px 16px 12px 16px;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  

  return (
    <Container>
      <Header />
      <Character />
    </Container>
  );
}

export default App;
