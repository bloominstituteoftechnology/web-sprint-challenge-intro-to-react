// Write your Character component here
import React from 'react';


const Character = props =>{
    return(
        <div>
            <img src={props.image} alt="Character Avatar" />
            <div>
                <h4>{props.name}</h4>
                <h5>Species</h5>
                <p>{props.species}</p>
                <h5>Origin:</h5>
                <p>{props.origin}</p>
                <h5>Status:</h5>
                <p>{props.status}</p>
            </div>
        </div>
    )

}




export default  Character;