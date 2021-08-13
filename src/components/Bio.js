import React from 'react'
import styled from 'styled-components'

const StyledBio = styled.div`
    li {
        display:flex;
        justify-content: center;
        color: ${pr => pr.theme.tertiaryColor}
    }
`;

function Bio(props) {
    const { gender } = props
    // const [details, setDetails] = useState(null)

    // useEffect(() => {
    //     axios.get(`https://swapi.dev/api/planets/`)
    //         .then(res => {
    //             setDetails(res.data);
    //         })
    //         .catch(err => {
    //             debugger
    //         })
    // }, [])

    return (
        <StyledBio>
            <ul>
                <li>Gender: {gender}</li>
                {/* <li>Homeworld: {world.name}</li> */}
                {/* <li>Homeworld: {world.homeworld}</li>
                <li>Climate: {world.climate}</li> */}
            </ul>
                {/* {info &&
                <ul>
                    <li>Name: {info.name}</li>
                </ul>
                } */}
            {/* <button onClick={close}>Close</button> */}
        </StyledBio>
    )

}

export default Bio