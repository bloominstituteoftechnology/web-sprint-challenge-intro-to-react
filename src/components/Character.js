// Write your Character component here
import React, {useState,useEffect} from 'react';

import axios from 'axios';
import { render } from '@testing-library/react';



const url = "https://swapi.dev/api/people";
export default function Characters(props){
    const {src} = props;
    const [characters ,setCharacters] = useState([]);
    useEffect(()=>{
        axios.get(src).then((res)=>{
            setCharacters(res.data);
        //     console.log("CHARACTERS!",res.data);
        //   console.log("DATA!",res);
        })
    },[])
    
    const Setup = (props)=>(
        
        <div>
        <div>{props.info.name}</div>
        <div>
            <div>{props.info.height}</div>
            <div>{props.info['hair_color']}</div>
            <div>{props.info['skin_color']}</div>


        </div>
    </div>
    );
      
    // let done = characters.map((item, i)=>{
    //     return <Setup key = {i} info = {item}/>
    // })
    //   console.log("DONE!",done);
    
    // console.log('Info!',characters)
    
 return (
     <div>
         { characters.map((item, i)=>{
        return <Setup key = {i} info = {item}/>
    })}
     </div>
 );
}
