import React, {useState} from 'react'
import { Collapse, Button, CardBody, Card } from 'reactstrap'

const Character = props => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  
    console.log(props.data)
    const character = props.data
    

  return (
    <div>
      <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>{character.name}</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
            <h2>Birth Year: {character.birth_year}</h2>
            <h2>ye Color: {character.eye_color}</h2>
            <h2>Gender: {character.gender}</h2>
            <h2>Hair Color: {character.hair_color}</h2>
            <h2>Height: {character.height}</h2>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );

}

export default Character;