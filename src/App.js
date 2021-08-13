import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import Details from './components/Details';

export default function App()
{
    // Try to think through what state you'll need for this app before starting. Then build out
    // the state properties here.

    // Fetch characters from the API in an effect hook. Remember, anytime you have a 
    // side effect in a component, you want to think about which state and/or props it should
    // sync up with, if any.

    const [characters, setCharacters] = useState(null);
    const [currentCharacter, setCurrentCharacter] = useState(null);
    const [error, setError] = useState(null);

    const openDetails = (id) =>
    {
        const character = characters.filter(item => item.id === id);
        setCurrentCharacter(character);
    };

    const closeDetails = () =>
    {
        setCurrentCharacter(null);
    };

    useEffect(() =>
    {
        console.log("Fetching the characters...");
        axios.get("https://swapi.dev/api/people")
            .then(response =>
            {
                // save 'response.data' in local variable 'characters'
                const characters = response.data;

                // add an 'id' to each character on the fly
                let id = 1;
                characters.forEach(item => item.id = id++);

                console.log(characters);
                setCharacters(characters);
            })
            .catch(err =>
            {
                console.error(err);
                setError(err);
            });
    }, []);

    return (
        <div className="App">
            <h1 className="Header">Characters</h1>
            {error && <h2>{error}</h2>}
            {
                characters &&
                characters.map(item => 
                {
                    return <Character
                        key={item.name}
                        info={item}
                        openDetails={openDetails}
                        closeDetails={closeDetails}
                    />;
                })
            }
            {
                currentCharacter && <Details info={currentCharacter} closeDetails={closeDetails} />
            }
        </div>
    );
};