import React from 'react'
import styled from 'styled-components'
import cuid from 'cuid'


const StyledDiv = styled.div`
    background-color: ${(pr) => pr.theme.black};
    color: ${(pr) => pr.theme.awhite};
    padding ${(pr) => pr.theme.paddingSmall};
    margin: ${(pr) => pr.theme.marginSmall} auto;
    border-radius: 10px;
    width: 80%;

    h2 {
        color: goldenrod;
        font-size:2.2rem;
    }

    p {
        font-size:1.5rem;
        line-height:1.5;
    }

    a {
        font-size: 1.8rem;
        text-decoration: none;
        color: goldenrod;
    }

    a:visited {
        color: goldenrod;
    }

    a:hover {
        color: ${(pr) => pr.theme.white};
    }
`

const Card = ({ missions }) => {
    console.log(missions)
    return (
        <>
            {missions.map((mission) => {
                <StyledDiv key={cuid()}>
                    <h2>
                        {mission.mission_name} '{mission.mission_id}'
                    </h2>
                    <p>{mission.description}</p>
                    <p>
                        <a href={mission.wikipedia}> {mission.mission_name}</a>
                    </p>
                </StyledDiv>
            })
        </>
    )
}


export default Card