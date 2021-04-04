import React from 'react';
import {Accordion, Card} from 'react-bootstrap'
import styled from 'styled-components';
import DetailsSection from './DetailsSection.js';


const StyledHeaderName = styled.h2`
font-family: Megrim;
font-size: 40px;
text-align: left;
font-weight:800;
padding: 10px 20px 20px 30px;  `;

const DetailsButton = styled.button`
font-family: Megrim;
font-size: 28px;
`;

const Character = props => {
  const { id,
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
    starships,
    currentCharacterId} = props;
 
  return (
    <>
    <Card>
      <Card.Header>
        <StyledHeaderName>{name}</StyledHeaderName>
        <Accordion.Toggle as={DetailsButton} variant='link' eventKey='0'>
          Details
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey='0'>
        <Card.Body>
          <DetailsSection 
                currentCharacterId={currentCharacterId}
                id={id}
                height={height}
                mass={mass}
                hair_color={hair_color}
                skin_color={skin_color}
                eye_color={eye_color}
                birth_year={birth_year}
                gender={gender}
                homeworld={homeworld}
                films={films}
                species={species}
                vehicles={vehicles}
                starships={starships}/>
            </Card.Body>
      </Accordion.Collapse>
    </Card>
    </>
  );
};

export default Character;
