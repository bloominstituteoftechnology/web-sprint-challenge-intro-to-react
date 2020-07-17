import React  from "react";
import styled, { keyframes } from 'styled-components';


const Character = (props) =>{
    const { character } = props;
    console.log(props)


// Write your Character component here
const StyledDetails = styled.div`





.Block {
  background-color: #ffa64d;
  height: 200px;
  width:450px;
  opacity: 0.6;
  border-radius: 20px;
  border-style: ridge;
  border-width:10px;
  margin: 5px;
  
}

.ame {
    font-size: 2.6em;
    color: #1a1a1a;
}
.Birth {
    font-size: 2em;
    color: #1a1a1a; 
}

`

return(
<StyledDetails id='detailsView' className ='container'>
<div className= "Block">{character.i}
    <p className ="ame">{character.name}</p>
    <p className ="Birth">YOB {character.birth_year}</p>
    <p className="Films"></p>

</div>
</StyledDetails>
)}
export default Character