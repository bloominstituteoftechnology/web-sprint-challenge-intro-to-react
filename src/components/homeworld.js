import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'

function Homeworld(props) {
    let [world, setWorld] = useState();
    let worldRef = useRef();

    useEffect(() => {
    axios.get(props.data) 
        .then((response) => {
            setWorld(response.data);
        }).catch((error) => alert(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [worldRef]);

    return (
        <span>
            {world && world.name}
        </span>
    )
}

export {
    Homeworld
}