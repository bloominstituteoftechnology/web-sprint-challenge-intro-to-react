import React from 'react'

import styled from 'styled-components'

const StyledBio = styled.div`
    p {
        color: ${pr => pr.theme.secondaryColor}
    }
`;

function Bio(props) {
    const { homeworld, films, species, vehicles, starships, created, edited, url } = props

    return (
        <StyledBio>
            <p>Homeworld: {homeworld}</p>
            <p>Films: {films}</p>
            <p>Species{species}</p>
            <p>Vehicles: {vehicles}</p>
            <p>Starships: {starships}</p>
            <div>Picture:
                <img src={url}></img>
            </div>
        </StyledBio>
    )

}

export default Bio