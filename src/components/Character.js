// Write your Character component here
import React from 'react';
import styled from 'styled-components'


const Container = styled.div`
width:100%;
`

const Card = styled.div`
border: 2px solid black; 
width: 50%;
background-color: #958855;
 
`

const Characters = (props) => 
{
    const { characters } = props;
    return (
        <Container className="container">
            { characters.map((p) =>
            {
                return (
                    <Card>
                        <div>
                            <h2>{p.name}</h2>
                        </div>
                        <div>
                            <p>{p.height}</p>
                        </div>


                    </Card>)
            })
            }

        </Container>


    );
};


export default Characters;  