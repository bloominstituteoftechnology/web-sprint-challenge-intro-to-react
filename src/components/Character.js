import React from 'react'

function Character(props){
     return(
          <div>

          <h2>{props.name}</h2>
          <p>
               Gender: {props.gender}
          </p>
               Birth Year:  {props.birth_year}
          </div>

     )
}

export default Character;
