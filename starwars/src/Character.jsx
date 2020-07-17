import React from 'react';
import styled from 'styled-components';

const H3 = styled.h3`
  color: teal;
`;

export default function Character(props) {
  const {character} = props;
  return (
    <H3>{character.name}</H3>
  );
}
