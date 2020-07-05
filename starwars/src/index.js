import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styled from "styled-components";
import App from './App';


const WrapperDiv = styled.div`
font-family: italics;
text-align: center;

`;


const rootElement = document.getElementById('root');
ReactDOM.render(<App />, document.getElementById('root'));
