import React, {useState}  from "react"
import styled from  'styled-components';


const StyleDiv = styled.div`
font-family: san-serif;
text-align: center;
width: 100%;
height: 100%;
padding: 6px 10px;
margin-top: 25px;
border: none;
border-radius: 3px;
color: white;
`;


function VehiclesCards(props){
    const {vehicles} = props
     return(
    <div>   
    <div>
     <StyleDiv>{vehicles.name}</StyleDiv>   
    </div>       
    </div>
    )}
    
export default VehiclesCards