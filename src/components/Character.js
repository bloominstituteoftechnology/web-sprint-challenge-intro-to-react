// Write your Character component here

import React from 'react'
// import axios from 'axios'
import Bio from './Bio'
import styled from 'styled-components'

const StyledChar = styled.div`
    h4 {
        color: ${pr => pr.theme.primaryColor};
        &:hover{
            transform: rotate(-10deg);
            font-size: 250%;
        }
    }
    li {
        display:flex;
        justify-content: center;
        color: ${pr => pr.theme.secondaryColor}
    }
`;

function Character(props) {
    const { info } = props
    // const [planetData, setPlanetData] = useState([])
    // console.log('THIS IS THE PLANET DATA', planetData)

    // useEffect(() => {
    //     axios.get(`https://swapi.dev/api/planets/`)
    //         .then(res => {
    //             setPlanetData(res.data);
    //         })
    //         .catch(err => {
    //             debugger
    //         })
    // }, [])

    return (
        <div>
            <StyledChar>
                <h4>Name: {info.name}</h4>
                <ul>
                    <li>Height: {info.height}</li>
                    <li>Mass: {info.mass}</li>
                    <li>Hair Color: {info.hair_color}</li>
                    <li>Skin Color: {info.skin_color}</li>
                    <li>Eye Color: {info.eye_color}</li>
                    <li>Birth Year: {info.birth_year}</li>
                </ul>
                {/* <p>{info.name}</p>
                <button onClick={() => action(info.id)}>
                    Character Details
                </button> */}
            </StyledChar>
            <Bio className="Bio"
                gender={info.gender}
                // homeworld={info.homeworld}
            />
            {/* {
            planetData.map(cr => {
                return <Bio
                    className="Bio"
                    key={cr.id}
                    world={cr}
                />
            })
            } */}
        </div>
    )

}

export default Character