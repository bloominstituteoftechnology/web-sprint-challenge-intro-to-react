// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    width: 40%;
    border: 3px dashed gray;
    margin: 3rem auto;
    background-color: pink;
`
function Character(props) {
    console.log('PROPS', props)
    const { list } = props

    return (
        <>
            {list.map(chr => {
                return (
                    <Card>
                        <h2>{chr.name}</h2>
                        <p>Height: {chr.height}</p>
                        <p>Mass: {chr.mass}</p>
                        {/* <p>{chr.}</p> */}
                        {/* <p>{chr.}</p> */}
                    </Card>
                )
            })}
        </>
    )
}

export default Character