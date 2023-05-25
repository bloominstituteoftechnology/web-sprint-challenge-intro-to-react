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
                Name: { name },
                gender: {gender},
                Height: {height},
                Mass: {mass},
                BirthYear: {birth_year},
                Eye Color: {eye_color},
                Hair Color: {hair_color},
                Skin Color: {skin_color};
          </CardBody>
        </Card>
      </Collapse>
    </React.StrictMode>
  );
}

export default CharacterData;