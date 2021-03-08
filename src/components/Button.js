import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Button = styled.button`

border: 2px solid white;
color: white;
font-family: sans-serif;


  ${props => (props.type === 'primary')}
  ${props => (props.type === 'clicked') ? 'background: white' : null}

`;

export default Button;