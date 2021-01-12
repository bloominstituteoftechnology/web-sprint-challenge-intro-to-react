import React from 'react';
import axios from 'axios';
import '../App.css';
import styled from 'styled-components';


export default function Homeworld(props) {
  const { homeworldData } = props;

  console.log(props);

  console.log("homeworldData from Homeworld: ", homeworldData); // it works

 



  return (
    <div>{homeworldData}</div>
  );
}
