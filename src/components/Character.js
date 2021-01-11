// Write your Character component here
import React from 'react'
//import styled from 'styled-components'

// const Container = styled.div`
//     font-family: sans-serif,
//     background-color: black,
//     color: white,
//     margin: 2rem,
// `
function Character(props){
    console.log(props)

    return(
        <div className='Character'> 
            <p>Name: {props.data.name}</p>
            <p>Height: {props.data.height}</p>
            <p>Eye Color: {props.data.eye_color}</p>
            <p>Hair Color: {props.data.hair_color}</p>
            <p>Gender: {props.data.gender}</p>
            <p>Skin Color: {props.data.skin_color}</p>
        </div> 
    )
}

export default Character