import React, { useState } from 'react';
import '../App.css';
import { Collapse, Button, CardBody, Card } from 'reactstrap';



const Vehicles = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { vehiclesData } = props;

  const toggle = () => setIsOpen(!isOpen);

  const vehicle = vehiclesData.length === 0 ? ["none"] : vehiclesData

  return (
    <div className="sub-component">
      <Button color="warning" onClick={toggle} style={{ marginBottom: '1rem' }}>Vehicles</Button>
      <Collapse isOpen={isOpen}>
         <Card>
          <CardBody> 
            {vehicle.map(vehicle => {
              return <p key={vehicle}>{vehicle}</p>
            })}
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default Vehicles;