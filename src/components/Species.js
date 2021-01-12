import React, { useState } from 'react';
import '../App.css';
import { Collapse, Button, CardBody, Card } from 'reactstrap';



const Species = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { speciesData } = props;

  const toggle = () => setIsOpen(!isOpen);

  const species = speciesData.length === 0 ? ["none"] : speciesData
  return (
    <div className="sub-component">
      <Button color="warning" onClick={toggle} style={{ marginBottom: '1rem' }}>Species</Button>
      <Collapse isOpen={isOpen}>
         <Card>
          <CardBody> 
            {species}
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default Species;