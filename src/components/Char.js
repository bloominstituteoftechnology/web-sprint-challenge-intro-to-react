import React,{useState, useEffect } from "react";
import axios from "axios";


const Char = ({name ,dob, gender, mass}) =>{




    return (
        <div>
            <h3>{name}</h3>
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
    );
}



export default Char;