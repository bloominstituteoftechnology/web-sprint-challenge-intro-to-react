// Write your Character component here
import React from 'react';







export default function Character({info}) {
  
    return (

      <div>
          <p>Name: {info.name}</p>
          <p>Birth Year: {info.birth_year}</p>

    </div>
      
        
    )
}
