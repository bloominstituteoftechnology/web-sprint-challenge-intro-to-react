// Write your Character component here
import React from 'react'

// import styled from "styled-components";

const Character = ({info, action}) => {
    return (
        <Character>
        {info.name}
        <button onClick= {() => action(info.id)}> More Info</button>
        </Character>
    )
}
export default Character