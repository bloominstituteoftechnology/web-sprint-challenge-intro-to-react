import React, { useState } from 'react';
import '../App.css';
import { Collapse, Button, CardBody, Card } from 'reactstrap';



const Films = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { filmsData } = props;

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="sub-component">
      <Button color="secondary" onClick={toggle} style={{ marginBottom: '1rem' }}>Films</Button>
      <Collapse isOpen={isOpen}>
         <Card>
          <CardBody> 
            {filmsData.map(filmName => {
              return <p key={filmName}>{filmName}</p>
            })}
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
}

export default Films;