import React from 'react';
import Character from '../components/Character';

const Characters = (props) => {
    const { starChars } = props;

    return (
        <div>
            <Character starChar={starChars} />
        </div>
    )
}

export default Characters;