import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';
import styled from 'styled-components';
import { Collapse, Button, CardBody, Card } from 'reactstrap';



const Starships = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { starshipsData } = props;

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button color="secondary" onClick={toggle} style={{ marginBottom: '1rem' }}>Starships</Button>
      <Collapse isOpen={isOpen}>
         <Card>
          <CardBody> 
            {starshipsData.map(filmName => {
              return <p>{filmName}</p>
            })}
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default Starships;