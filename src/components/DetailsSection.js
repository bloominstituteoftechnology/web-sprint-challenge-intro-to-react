import React from 'react'
import {CardBody,Card } from 'reactstrap'
import styled from 'styled-components'

const DetailsSection = props =>{
    const {id, key, details:{
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
      starships
    }} = props

    const StyledContainer = styled.section`
        max-width:700px;
        padding:0 30px;
        margin:0 auto;
        `
     const StyledName = styled.h2`
        font-family: Megrim;
        font-size: 30px;
        text-align: left;
        padding: 40px 30px 20px 30px`
    
    const StyledText = styled.p`
        font-family:Megrim;
        font-size:18px;
        margin:20px;
        padding:20px;
    `
    
    return(
        <>
        <StyledContainer as='div'>
            
                <CardBody>
                    <StyledName>{name}</StyledName>
                    <StyledName>Height:<StyledText>{height}</StyledText> </StyledName>
                </CardBody>
            
        </StyledContainer>
        </>
    )
}
export default DetailsSection