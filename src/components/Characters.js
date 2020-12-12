import React from 'react'
import Character from './Character'
import styled from 'styled-components'
import luke from '../images/luke.jpg'
import c3po from '../images/c-3po.jpg'
import r2d2 from '../images/r2d2.jpg'
import darth from '../images/darth-vader.jpg'
import leia from '../images/leia.jpg'
import owen from '../images/owen.jpg'
import beru from '../images/beru.jpg'
import r5d4 from '../images/r5-d4.jpg'
import biggs from '../images/biggs.jpg'
import obi from '../images/obi.jpg'
import logo from '../images/logo.png'

  //styling

const StyledCharacters = styled.section`
  max-width: 1300px;
  margin: 0 auto;
  padding: ${pr => pr.theme.padding.large} 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  .characters-container {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
  }

  .header {
    font-family: sans-serif;
    text-transform: uppercase;
    color: ${pr => pr.theme.primaryColor};
    font-size: 36px;
    text-align: center;
    margin-bottm: ${pr => pr.theme.margin.large};
    padding-top: ${pr => pr.theme.padding.large}
  }
  .logo {
    margin: 0 auto;
    text-align: center;
    width: 300px;
  }
`

const images = [
luke,
c3po,
r2d2,
darth,
leia,
owen,
beru,
r5d4,
biggs,
obi,
]


export default function Characters(props) {
  const { characters } = props;
  return (
    <StyledCharacters>
      <img className='logo' src={logo} alt='Star Wars logo'/>
      <h1 className="header">Characters</h1>
      <div class="characters-container">
      {
        characters.map((character, index) => {
          return <Character image={images[index]} character={character} />
        })
      }
      </div>
    </StyledCharacters>
  )
}
