// Write your Character component here
import React from 'react';
import styled from 'styled-components';

export default function Character(props) {
    const { info, /* action, */ birth } = props;

    //console.log(name);

    return(
        <div className='characterName' /* birthyr={birth} */> 
            {info.name}
            <span className='birth_year' /* will add action later on click */> {info.birth_year} </span>
        </div>
        );    
};