// Write your Character component here
import React from 'react'


const Character = (props) => {
    console.log(props)


return (
    <div>
        {
            props.characters.map(character => (
              <>
                <h2>{character.name}</h2>

                <p>{character.height}</p> 
              </>
            ))
        }
    </div>
)

}

export default Character