// Write your Character component here
import React,{useState} from 'react';
import styled from 'styled-components';


//! This creates each character



// this styles each table 
const CreatorStyle = styled.div`
display: block;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
  h2{
      color:#002395;
      &:hover{
      transition:all 0.5s ease-in-out;
      color:red;
  }
  transition:all 0.5s ease-in-out;
  };
  span{
      color:white;
  };
`;

// this styles all tables
const AllCharacterStyle = styled.div`
  font-size: 30px;
  color: #fcd000;
  font-weight: bold;
  width: 600px;
  margin: 0 auto;
  animation: animateCrawl 20s ease-in; //i added this ugly animation just for fun
  @keyframes animateCrawl {
    0%   { transform: rotateX(30deg) translateY(400px); }
    100% { transform: rotateX(30deg) translateY(-300px); }
 }
`;

/* //this component receives an array with names and returns created tables for every character from an array */

    const Person = props =>{
        const{makeTrue,setMakeTrue,item} = props;
        return (
            <CreatorStyle key={item.name} className={item.name}>
            <h2>{item.name}</h2>
            <button onClick={(e) =>{setMakeTrue(!makeTrue); e.stopPropagation()}}>▄</button>
            {makeTrue && <div> 
            <p>Gender: {item.gender}</p>
            <p>Height: {item.height}</p>
            <p>Birth Year: {item.birth_year}</p>
            <p>Films: {item.films.map(film =>{
                return (<span key={film}> {film}; </span>)
            })}</p>
            </div>}
            </CreatorStyle>
        )
    };

  

export default Person;