import React from 'react';
import styled from 'styled-components';

export default function Character(props)
{
    return (
        <div>
            {props.info.name}
            <button onClick={() => props.openDetails(props.info.id)}>
                See Details
            </button>
        </div>
    );
}