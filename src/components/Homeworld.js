import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';
import styled from 'styled-components';
import { Collapse, Button, CardBody, Card } from 'reactstrap';


const Homeworld = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { homeworldData } = props;
  const { name, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water, population } = homeworldData;

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div class="sub-component">
      <Button color="warning" onClick={toggle} style={{ marginBottom: '1rem' }}>Homeworld</Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
              Homeworld: {name}<br/>
              Rotation: {rotation_period}<br/>
              Orbit: {orbital_period}<br/>
              Diameter: {diameter}<br/>             
              Climate: {climate}<br/>
              Gravity: {gravity}<br/>
              Terrain: {terrain}<br/>
              Surface Water: {surface_water}<br/>
              Population: {population}<br/>
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default Homeworld;