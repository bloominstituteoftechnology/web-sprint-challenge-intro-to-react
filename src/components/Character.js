// Write your Character component here
import React from 'react';


const Character = props =>{
    return(
        <div>
            <img alt="Character Avatar" />
            <div>
                <h4>Charcater Name</h4>
                <h5>Species</h5>
                <p>Character Species</p>
                <h5>Origin:</h5>
                <p>Character Origin</p>
                <h5>Status:</h5>
                <p>Character Status</p>
            </div>
        </div>
    )

}




export default  Character;