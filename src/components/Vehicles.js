import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';
import styled from 'styled-components';
import { Collapse, Button, CardBody, Card } from 'reactstrap';



const Vehicles = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { vehiclesData } = props;

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div class="sub-component">
      <Button color="warning" onClick={toggle} style={{ marginBottom: '1rem' }}>Vehicles</Button>
      <Collapse isOpen={isOpen}>
         <Card>
          <CardBody> 
            {vehiclesData.map(filmName => {
              return <p>{filmName}</p>
            })}
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default Vehicles;