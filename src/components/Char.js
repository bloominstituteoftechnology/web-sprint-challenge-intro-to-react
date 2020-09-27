import React,{useState, useEffect } from "react";
import axios from "axios";


const Char = ({name ,dob, gender, mass}) =>{
    const  [charFo,setCharFo] = useState(false);

    const info = () =>{
        if(charFo){
            setCharFo(false);
        }else{
            setCharFo(true);
        }

    };


    return (
        <div onClick={info}>
            <h3>{name}</h3>
            {
                charFo ? <div >
                <p>
                DOB {dob}
                </p>
                <p>
                    Gender {gender}
                </p>
                <p>
                    Mass: {mass}
                </p>
    </div>
            : <div><i>Info</i></div>
            }
        </div>
    );
}



export default Char;