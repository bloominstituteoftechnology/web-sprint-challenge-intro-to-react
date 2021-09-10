import React, {useState} from 'react'
//import styled from 'styled-componenets'
// Write your Character component here
const Character = (props) => {
    const {characters} = props


return (
    <div>
        <h1>
            {characters.name}
        </h1>
        <h2>
            {characters.birth_year}
        </h2>
        <h2>
            {characters.gender}
        </h2>
    </div>
    )
}
export default Character