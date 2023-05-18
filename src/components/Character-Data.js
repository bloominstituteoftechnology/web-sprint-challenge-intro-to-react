import React, { useState } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';

function CharacterData(props) {
  const { name, height, eye_color, gender, mass, birth_year, hair_color, skin_color} = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <React.StrictMode>
      <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>
        { name }
      </Button>
      <Collapse isOpen={isOpen} {...props}>
        <Card>
          <CardBody>
            <li>
                Name: { name }
            </li>
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

export default CharacterData;