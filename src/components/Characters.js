import React from 'react'
import Character from './Character'
import styled from 'styled-components'

  //styling

const StyledCharacters = styled.div`
width: 90%;
margin: 0 auto;
max-width: 1200px;
padding: 0;
.Header {
  color: white;
  font-size: 36px;
  text-align: center;
}
`

export default function Characters(props) {
  const { characters } = props;

  // const images = {
  //   'Luke Skywalker' : "'../images/luke.jpg'",
  //   'C-3PO' : "'../images/c-3po.jpg'",
  //   'R2-D2' : "'../images/r2d2.jpg'",
  //   'Darth Vader' : "'../images/darth-vader.jpg'",
  //   'Leia Organa' : "'../images/leia.jpg'",
  //   'Owen Lars' : "'../images/owen.jpg'",
  //   'Beru Whitesun lars' : "'../images/'",
  //   'R5-D4' : "'../images/r5-d4'",
  //   'Biggs Darklighter' : "'../images/biggs.jpg'",
  //   'Obi-Wan Kenobi' : "'../images/obi.jpg'",
  // }

  return (
    <StyledCharacters>
      <h1 className="Header">Characters</h1>
      {
        characters.map((character, index) => {
          return <Character key={index} character={character} />
        })
      }
    </StyledCharacters>
  )
}
