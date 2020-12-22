import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";




export default function CharacterCards(props){


const {character} = props








   return(
     
<div className="card" style={{width: "18rem"}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{character.name}</h5>
    <p className="card-text"><div>{character.id}  
    </div> <div>{character.species}</div>
    <div>{character.type}</div>
    <div>{character.url}</div>
    <div>{character.status}</div>
    </p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
     
               
        

   )          

}


