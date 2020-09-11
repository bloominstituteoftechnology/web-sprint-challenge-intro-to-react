import React, {useState} from 'react';
import './App.css';
import Character from './components/Character'
import Gallery from './components/Gallery'
import Footer from './components/Footer'
import styled from 'styled-components'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [galleryDisplay, setGalleryDisplay] = useState(false)

  return (
    <StyledDiv className="App">
      {/*<h1 className="Header">Characters</h1>*/}
      {galleryDisplay ? (<Gallery />) : (<Character />)}
      <br />
      <button onClick={() => setGalleryDisplay(!galleryDisplay)}>
        {galleryDisplay ? "Character" : "Gallery"}
      </button>
      <Footer />
    </StyledDiv>
  );
}

const StyledDiv = styled.div `
button {
        padding: 5px;
        border-radius: 10px;
        border: 1.5px dotted goldenrod;
        width: 300px;
        font-family: 'Grandstander', cursive;
        color: black;
        font-size: 20px;
        background-color: mediumturquoise;
        text-shadow: 1px 1px 5px #fff;
        &:hover {
            background-color: mediumaquamarine;
            color: white;
            text-shadow: 1px 1px 5px #fff;
            cursor: pointer;
        }
        &:focus {
            border: none;
            outline: none;
        }
        &:active {
            border: none;
            outline: none;
        }

    }
`

export default App;
