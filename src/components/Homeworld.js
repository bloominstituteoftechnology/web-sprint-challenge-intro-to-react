import React from 'react';
import axios from 'axios';
import '../App.css';
import styled from 'styled-components';


export default function Homeworld(props) {
  // const [homeworldData, setHomeworldData] = useState({}); // yank to parent, Character
  const { homeworldData} = props;

  // console.log("homeworldData: ", homeworldData); // it works

 



  return (
    <div>{homeworldData}</div>
  );
}
