// Write your Character component here
import React, {useState, useEffect} from 'react'
import axios from 'axios';
import styled from 'styled-components'

const StyledButton = styled.button `
  text-align: left;
  border: 2px solid black;
width: 15%;
margin-left: 1%;
padding: 20px;
font-weight: bold;

`
const StyledBackground = styled.div`

color:black;
display:block;
text-align:left;
margin:10%
display:flex;
justify-content:space-between;
align-items: center;
border:3px solid orange;
padding:0px 20px;
font-weight: bold;
font-size: 20px;

`


function Character(props) {
const { characterId, close } = props
const [details, setDetails] = useState(null)  
useEffect(() => {
       
    axios
    .get('https://swapi.dev/api/people/1/')
    .then(response => {
      setDetails(response.data)
    })
    .catch(err => console.log(err))


  }, [characterId])

    return(
        <StyledBackground className='container'>
        <h2>Details of friend with id {characterId}):</h2>
       { details &&
            <>
                <p>Name:<br></br>{details.name}</p> 
                <p>gender:<br></br>{details.gender}</p>
                <p>Height:<br></br> {details.height}</p>
                <p>mass:<br></br>{details.mass}</p>
                <p>Hair Color:<br></br>{details.hair_color}</p>
                <p>Eye Color:<br></br>{details.eye_color}</p>
            </>  
        }    
        <StyledButton onClick ={close}>Close</StyledButton>

        </StyledBackground>

 )

}
export default Character;

//<ul>
//{details.name.map((name) => <li key={name}>{name}</li>)}