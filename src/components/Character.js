// Write your Character component here
import React, {useState, useEffect}  from 'react';

export default function Character (props){
    const { name, age, something} = props

    return(
        <Character nameObj={name} ageObj={age}/>
    )
}