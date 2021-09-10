import React from "react";
import styled from "styled-components";

export default function Character(props)
{
    const Container = styled.div` 
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin: .5% 5% 1% 1%;
        padding: 8px;
        background-color: rgba(255,222,173,.3);
        color: #0077b6;
    
        span{
            display: inline-block;
            vertical-align: middle;
            padding: 10px;
        }
    `;

    const Button = styled.button`
        background: transparent;
        border-radius: 3px;
        border: 2px solid #0077b6;
        color: #0077b6;
        margin: 0.5em 1em;
        padding: 0.25em 1em;
    `;

    return (
        <Container>
            <span>
                {props.info.name}
            </span>
            <Button onClick={() => props.openDetails(props.info.id)}>
                See Details
            </Button>
        </Container>
    );
}