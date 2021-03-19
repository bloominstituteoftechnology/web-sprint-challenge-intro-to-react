import React from 'react'
import styled from 'styled-components'
const MyStyled = styled.div`
.dat {
    display:flex;
    justify-content: space-around;
}

`

const data = (props) => { 
const {data} = props 


return  (
    <MyStyled>
    <div class="name">
        <h1>{data.name}</h1>
     </div>
    <div class="dat"> 
        <p>Birth year: {data.birth_year}</p>
        <p>Eyes color: {data.eye_color}</p>
        <p>Gender: {data.gender}</p>
        <p>Hair Color: {data.hair_color}</p>
        <p>Mass: {data.mass}</p>
        <p>Skin Color: {data.skin_color}</p>
    </div>
    </MyStyled>
       

    
)
}
export default data