// import CharacterData from "./Character-Data";
// import React from 'react';

// const Character = (props) => {
//   const { data } = props;
//   return ( 
//     <div className="character-container-wrapper">
//       {data.map(element => {
        // return <CharacterData name={element.name} eye_color={element.eye_color} height={element.height} gender={element.gender} 
        // mass={element.mass} birth_year={element.birth_year} hair_color={element.hair_color} skin_color={element.skin_color}></CharacterData>
//       })}
//     </div>
//    );
// }
 
// export default Character;

import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

function Character(props) {
  const { name, height, eye_color, gender, mass, birth_year, hair_color, skin_color} = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <React.StrictMode>
      <Button color="dark" size="lg" onClick={toggle} style={{ marginBottom: '2rem', marginLeft: "2rem", marginRight: "2rem", marginTop: "20rem"}}>
        { name }
      </Button>
      <Collapse  isOpen={isOpen} {...props}>
        <Card>
          <CardBody style={{backgroundColor: "burlywood"}}className='cardbody'>
            <li>
                gender: {gender}
            </li>
            <li>
                Height: {height}
            </li>
            <li>
                Mass: {mass}
            </li>
            <li>
                BirthYear: {birth_year}
            </li>
            <li>
                Eye Color: {eye_color}
            </li>
            <li>
                Hair Color: {hair_color}
            </li>
            <li>
                Skin Color: {skin_color}
            </li>
          </CardBody>
        </Card>
      </Collapse>
    </React.StrictMode>
  );
}

export default Character;