import React,{useState, useEffect } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons';

import styled from "styled-components";

const ClkD = styled.div`
        display:flex;
        box-shadow: 1px 1px 0px black;
        justify-content:center;
        align-content:center;
        width:20%;
        border:1px solid black;
        height:100%;
        min-width:10rem;
        background-color:blue;
        margin:1px;
        padding:1px;

`;

const H3 = styled.h3`

    margin-right:5%;
    width:60%;
    height:100%;
    text-shadow: 0px 1px 1px black;
    background-color:red;
    box-shadow: 1px 1px 0px black;

`;


const Char = ({name ,dob, gender, mass,skin_color}) =>{
    const  [charFo,setCharFo] = useState(false);

    const info = () =>{
        if(charFo){
            setCharFo(false);
        }else{
            setCharFo(true);
        }

    };


    return (
        <ClkD onClick={info}>
            <H3>{name}</H3>
            {
                charFo ? <div >
                    <p>
                    DOB: {dob}
                    </p>
                    <p>
                        Gender: {gender}
                    </p>
                    <p>
                        Mass: {mass}
                    </p>
                    <p>
                        Skin: {skin_color}
                    </p>
                        </div>
            : <div><i>Info</i> 

            </div>
            }
        </ClkD>
    );
}



export default Char;