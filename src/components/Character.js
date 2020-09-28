// Write your Character component here
import React from 'react';
import CharacterInfo from "./CharacterInfo"


const Character = (props) => {
    const {data} = props;
    return(
        <div>
            {data.map((item,index)=>{
            return(
                <div>
                    <CharacterInfo key={index} people={item}/>
                </div>
            )
            })}
        </div>
    )

    }
export default Character;