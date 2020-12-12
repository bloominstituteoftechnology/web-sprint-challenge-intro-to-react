// Write your Character component here
//this is where the character information will be passed in. TODO: export the information into the List in App.js
import React, { useState, useEffect } from "react"
import Axios from  "axios"
import styled from "styled-components"

const CharacterCardContainer = styled.div`
  color: whitesmoke;
  justify-self:center;
  width: 40%;
  background-color:grey;
  padding:2%;
`;
var acc = document.getElementsByClassName("accordion")
var i

for (i = 0; i< acc.length; i++){
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active")

    var panel = this.nextElementSibling
    if (panel.style.display === "block") {
      panel.style.display = "none"
    } 
    else {
      panel.style.display = "block"
    }
  }


const Character = () => {
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    Axios.get("https://swapi.dev/api/people/")
.then(res => {
  console.log(res.data.results)
  setCharacters(res.data.results)
})
.catch(err =>{console.log(err)})
}, [])

    return (
      <div className="Character">
        {characters.map((character, idx) => {
          console.log(character)
        return (  
            <CharacterCardContainer key={idx}>
            <button class="accordion">Name: {character.name}</button>
            <div class="panel">
            <p>Gender: {character.gender}</p>
            <p>Height: {character.height}</p>
            <p>Mass: {character.mass}</p>
            <p>Birth Year{character.birth_year}</p>
            <p>Eye Color: {character.eye_color}</p>
            <p>Hair Color: {character.hair_color}</p>
            <p>Skin Color:{character.skin_color}</p>
            </div>
            </CharacterCardContainer>
            )
          })}
      </div>
        
    )
    }
export default Character
  