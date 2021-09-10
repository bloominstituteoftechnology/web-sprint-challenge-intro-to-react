import React, {useState} from 'react'
import styled from 'styled-components'

//const CharacterCard = styled.div`
//background-color: black;
//`

// Write your Character component here
const Character = (props) => {
    const {characters} = props;
    
    console.log(characters);
    console.log(props);


return (
    <div>
    {characters.map(res => {
        return ( 
        <div> 
            <h1>{res.name}</h1>
            <h2>{res.birth_year}</h2>
            <h2>{res.gender}</h2>
        </div>
        )
})}
</div>
    )
}

export default Character