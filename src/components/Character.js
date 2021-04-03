import React, { useState } from 'react';
import { Collapse, CardBody, Card } from 'reactstrap';
import styled from 'styled-components';
import DetailsSection from './DetailsSection.js';
import{Transition} from 'react-transition-group'

const Character = props => {
  const {
    id,
    key,
    details: {
      name,
      height,
      mass,
      hair_color,
      skin_color,
      eye_color,
      birth_year,
      gender,
      homeworld,
      films,
      species,
      vehicles,
      starships
    }
  } = props;

  const [areDetailsShowing, setAreDetailsShowing] = useState(false);
  const [collapse, setCollapse] = useState(false)
  const [status, setStatus] = useState('Closed')

  const onEntering = () => setStatus('Opening...')
  const onEntered = ()  => setStatus('Opened')
  const onExiting = () => setStatus('Closing...')
  const onExited = () => setStatus('Closed')

  const StyledWrapper = styled.section`
    margin: 10px 400px;
    background: silver;
  `;

 const StyledName = styled.h2`
    font-family: Megrim;
    font-size: 30px;
    text-align: left;
    padding: 40px 30px 20px 30px;
  `;

  const Button = styled.button`
    font-family: Megrim;
    font-size: 28px;
  `;
  let collapsedClass;

    status === 'Closed'
    ?
    collapsedClass= 'hide'
    : collapsedClass = 'show'

  const toggle = props => {
               setAreDetailsShowing(!areDetailsShowing);
      setCollapse(!collapse)
       };
  return (
    <StyledWrapper>
      <StyledName>
        {name}
      </StyledName>
      {status}
      <Button id="toggler" color="secondary" onClick={toggle}>
        Details
      </Button>
      {/* <Collapse className={collapsedClass}
            isOpen={collapse}
            onEntering={onEntering}
            onEntered={onEntered}
            onExiting={onExiting}
            onExited={onExited}>
            <Card>
                <DetailsSection id={id} key={key} details={props.details}                        
                />
            </Card>

      </Collapse> */}
    </StyledWrapper>
  );
};

export default Character;
