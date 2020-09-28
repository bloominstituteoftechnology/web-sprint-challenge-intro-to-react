// Write your Character component here
import React from 'react';
import {Card,CardTitle} from 'reactstrap'
import CharacterInfo from "./CharacterInfo"


const Characters = (props) => {
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
export default Characters;