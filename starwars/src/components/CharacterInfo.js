import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'


const BASEURL = "https://swapi.py4e.com/api/people"

const StyledInfo = styled.div `
background-color: white;
border: 3px dotted black;
`

function CharacterInfo (props) {
    const{CharacterName, close } = props
    const [bio, setbio] = useState(null)
   

    useEffect(() => {
        axios.get(`${BASEURL}`)
        .then(res => {
          setbio(res.data.results)
        })
        .catch(err => {
          console.log(err)
        })
      }, [])
      
    console.log(bio)  





    return(
        <StyledInfo className="container">
            <h2> Character Biogrpahy :</h2>
            {
                bio &&
                <>
                <p> Alias: {bio.name}</p>
                <p> Gender: {bio.gender}</p>
                <p> Height: {bio.height} cm</p>
                <p> Mass: {bio.mass} kg</p>
                <p> Skin Color: {bio.skin_color}</p>
                <p> Hair Color: {bio.hair_color}</p>
                <p> Eye Color: {bio.eye_color}</p>
                </>
            }
            <button onClick={close}>Hide</button>


        </StyledInfo>
    )
}


export default CharacterInfo