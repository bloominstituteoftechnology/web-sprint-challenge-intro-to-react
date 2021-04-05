import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Characters from './components/Character'
import styled from 'styled-components'
import './App.css'

const StyledHeader = styled.h1`
    color: #fa292a;
`
const App = () => {
    // Try to think through what state you'll need for this app before starting. Then build out
    // the state properties here.

    // Fetch characters from the API in an effect hook. Remember, anytime you have a
    // side effect in a component, you want to think about which state and/or props it should
    // sync up with, if any.

    const [char, setChar] = useState([])

    useEffect(() => {
        axios
            .get('https://swapi.dev/api/people/')
            .then((res) => {
                setChar(res.data.results)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className="App">
            <StyledHeader className="Header">Characters</StyledHeader>
            <div className="container">
                <Characters charName={char} />
            </div>
        </div>
    )
}

export default App