import React, { useEffect, useState } from 'react';
import Character from './Character';
import axios from 'axios';
  


export default function Characters() {
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people`)
            .then(resp => {
                let characterData = resp.data.results;
                {characterData.map(charObj => {
                    // console.log(charObj)
                    return <Character
                        // info={charObj}
                        name='name'
                    />
                })}
            }).catch(err => {
                console.log(err)          
            })
    })
    
      return (<div> { 
            
        } </div>
        )

    // return (<div> {  useEffect(() => {<Character />}) } </div>)
}



