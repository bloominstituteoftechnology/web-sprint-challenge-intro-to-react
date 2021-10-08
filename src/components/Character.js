import React, { useState, useEffect } from 'react'
import CharacterCard from './CharacterCard.js'




export default function Character({items}) {
  


return(
    <div className='container'>
     {items.map((item)=>(
        <CharacterCard item = {item} />
     ))
      
      }
    </div>
)

    }