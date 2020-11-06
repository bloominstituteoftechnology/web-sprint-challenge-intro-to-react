import React, {useState, useEffect}from "react";





function Character(props) {
const {charArray} = props;
console.log(charArray);
charArray.map(element => {
    console.log(element);
    let name = element.name;
    let img = element.img;
    let gender = element.gender;
    let species = element.species;
    let location = element.location;
    let status = element.status;
    return (
        <div>
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
})

return Character
}

export default Character

    