import React from 'react';

export default function Film(props) {
    const { films } = props;

    return (
        <div>
            <p>{films}</p>
        </div>
    )
}