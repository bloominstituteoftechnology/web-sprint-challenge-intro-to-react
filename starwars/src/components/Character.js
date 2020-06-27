// Write your Character component here
import React, { useState, useEffect} from 'react';


const Character = () => {

    return(
        <div>
            <h3>Name:{name}</h3>
            <h3>Gender:{gender}</h3>
            <h3>Birth Year:{birth_year}</h3>
        </div>


    )
}
export default Character;