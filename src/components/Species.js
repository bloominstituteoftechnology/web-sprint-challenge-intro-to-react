import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';
import styled from 'styled-components';
import { Collapse, Button, CardBody, Card } from 'reactstrap';



const Species = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { speciesData } = props;

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div class="sub-component">
      <Button color="warning" onClick={toggle} style={{ marginBottom: '1rem' }}>Species</Button>
      <Collapse isOpen={isOpen}>
         <Card>
          <CardBody> 
            {speciesData}
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default Species;