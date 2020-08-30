import React from "react";

const People = (props) => {
    
    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.homeworld}</p>
            <p>{props.species}</p>
        </div>
    );
};

export default People;