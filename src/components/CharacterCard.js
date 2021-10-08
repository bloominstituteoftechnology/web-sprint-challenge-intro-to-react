import React from 'react'

 const CharacterCard = ({item}) => {
     return (
    <div className='card'>
<h3>{item.name}</h3>
<div> Gender: {item.gender}</div>
<div> Height: {item.height}</div>
<div> Mass: {item.mass}</div>
<div> Birth Year: {item.birth_year}</div>
<div> Eye Color: {item.eye_color}</div>
<div> Hair Color: {item.hair_color}</div>
<div> Mass: {item.mass}</div>
<div> Skin Color: {item.skin_color}</div>
     </div>
 )}
    
 export default CharacterCard;
