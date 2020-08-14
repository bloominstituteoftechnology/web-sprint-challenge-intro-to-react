// Write your Character component here
import React from 'react'
import styled from 'styled-components'



const StyledCont = styled.p`
border:dotted;
font-size:1.5rem;
color:purple;





`


function Character ({info }) {
    






    return(


        <div>
            <div>
                <h1>{info.name}</h1>
                <button>
                    {info.birth_year}
                </button>
            </div>
            <StyledCont>
                <p> Gender: {info.gender}</p>
                <p> Height: {info.height} cm</p>
                <p> Mass: {info.mass} kg</p>
                <p> Skin Color: {info.skin_color}</p>
                <p> Hair Color: {info.hair_color}</p>
                <p> Eye Color: {info.eye_color}</p>
               
            </StyledCont>
        </div>
    )
}


export default Character