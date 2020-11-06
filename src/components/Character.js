import React, {useState, useEffect}from "react";





function Character(props) {
const {charArray} = props;
console.log(charArray);
const card =charArray.map((element, idx) => {
    console.log(element);
    let name = element.name;
    let img = element.image;
    let gender = element.gender;
    let species = element.species;
    let location = element.location.name;
    let status = element.status;
    return (
        <div key = {idx}>
            <h1>{name} </h1>
            <img src={img} alt = {name}/>
            <div>
               Gender: {gender}
            </div>
            <div>
                Species: {species}
            </div>
            <div>
                Last Known location:  {location}
            </div>
            <div>
                Heatlh Status: {status}
            </div>
        </div>
    )
    
}
)
return (<div>
    {card}
    </div>)
}

export default Character
