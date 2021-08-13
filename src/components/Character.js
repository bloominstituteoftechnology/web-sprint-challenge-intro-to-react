// Write your Character component here
import React from "react";
import styled from 'styled-components';

const Button = styled.button`
     background: transparent;
     border-radius: 3px;
     border: 2px solid navy;
     color: navy;
     margin: 0.5em 1em;
     padding: 0.25em 1em;
     cursor: grab;
     cursor: auto;
`;

const Character = props =>
{
    return (
        <div>
            {props.info.name}
            <Button onClick={() => props.openDetails(props.info.id)}>{props.info.birth_year}</Button>
        </div>
    );
};

export default Character;