import React from 'react'
import styled from 'styled-components'

    // Section styling
    const StyledContainer = styled.section`
        max-width:700px;
        padding:0 30px;
        margin:0 auto;
        `
  
    // Styling for Character's Name
    const StyledName = styled.h2`
        font-family: Megrim;
        font-size: 30px;
        text-align: left;
        font-weight:500;
        padding: 5px;
        `
    
    // Styling for title of details
    const StyledDetails = styled.span`
        font-family:Megrim;
        font-weight:800;
        `
    

const DetailsSection = props =>{
    const {
      name,
      height,
      mass,
      hair_color,
      skin_color,
      eye_color,
      birth_year,
      gender,
      homeworld,
      films,
      species,
      vehicles,
      starships} = props
  
    return(
        <>
        <StyledContainer as='div'>                
            <StyledName>{name}</StyledName>
            <StyledName><StyledDetails>Height: </StyledDetails> {height}</StyledName>
            <StyledName><StyledDetails>Mass: </StyledDetails>{mass}</StyledName>
            <StyledName><StyledDetails>Hair Color: </StyledDetails>{hair_color}</StyledName>
            <StyledName><StyledDetails>Skin Color: </StyledDetails>{skin_color}</StyledName>
            <StyledName><StyledDetails>Eye Color: </StyledDetails>{eye_color}</StyledName>
            <StyledName><StyledDetails>Year of Birth: </StyledDetails>{birth_year}</StyledName>
            <StyledName><StyledDetails>Gender: </StyledDetails>{gender}</StyledName>
            <StyledName><StyledDetails>Homeworld: </StyledDetails>{homeworld}</StyledName>
            <StyledName><StyledDetails>Films: </StyledDetails>{films}</StyledName>
            <StyledName><StyledDetails>Species: </StyledDetails>{species}</StyledName>
            <StyledName><StyledDetails>Vehicles: </StyledDetails>{vehicles}</StyledName>
            <StyledName><StyledDetails>Starships: </StyledDetails>{starships}</StyledName>


        </StyledContainer>
        </>
    )
}
export default DetailsSection