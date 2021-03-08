// Write your Character component here
import React from 'react';
import styled from 'styled-components'


const StyledPeople = styled.div`
background:darkgreen;
display:flex;
flex-warp:wrap;
text-align: center;
margin: auto;
  width: 50%;
  border: 3px solid green;
  padding: 10px;
  font-size 15px;
span {

   padding-left:600px;

}
`



export default function Character({info}) {
  
    return (

      <StyledPeople>

          <p>Name: {info.name} </p>
           <span>{info.birth_year}</span>
          

    </StyledPeople>
      
        
    )
}
