// Write your Character component here
import React from 'react';
import '../App.css'
import {ContainerDiv, } from './Example'
export default function Characters(props) {
    const apiData = props.item;                                                   // This removes the need got having to type 'props'.
    console.log(apiData);           
    return (
         <ul>
            <ContainerDiv>
              {apiData.map(i => <li key={i.name}>{i.name}</li>)}
            </ContainerDiv>                       
        </ul>
     
       
    )
}