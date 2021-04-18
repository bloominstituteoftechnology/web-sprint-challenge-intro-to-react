import React  from "react"
import styled from  'styled-components';

const Style = styled.div`
font-family: "Times New Roman"
text-align: center;
width: 30%;
height: 20%;
border: none;
border-radius: 2px;
color: white;
&:hover {
color: red;    
`

const StyleDiv = styled.div`
font-family: san-serif;
text-align: center;
width: 20%;
height: 50%;
padding: 2px 10px;
margin-top: 12px;
border: none;
border-radius: 3px;
color: #443e3e;
text-shadow: 1px 1px 5px #fff;
font-weight: bold;

}

`;



function CharacterCards(props){
const {character} = props

return(



<div>   
 
 <h3><StyleDiv> {character.name} </StyleDiv>   </h3>   
<div> 
 <Style> height: {character.height} </Style> 

<Style> mass: {character.mass} </Style> 

<Style> hair-color: {character.hair_color}</Style>



</div>       
</div>
)}





export default CharacterCards