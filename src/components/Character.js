// Write your Character component here
import React from 'react';
import '../App.css'
import { H1 } from './Example'
export default function Characters(props) {
    const apiData = props.item;                                                   // This removes the need got having to type 'props'.
    console.log(apiData);           
    return (
         <ul>
          
              {apiData.map(i => <H1><li key={i.name}>{i.name}</li></H1>)}
                                
        </ul>
     
       
    )
}