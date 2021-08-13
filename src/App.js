import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';

export default function App()
{
    // Try to think through what state you'll need for this app before starting. Then build out
    // the state properties here.

    // Fetch characters from the API in an effect hook. Remember, anytime you have a 
    // side effect in a component, you want to think about which state and/or props it should
    // sync up with, if any.

    const [characters, setCharacters] = useState(null);
    const [characterId, setCharacterId] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() =>
    {
        console.log("Fetching the characters...");
        axios.get("https://swapi.dev/api/people")
            .then(response =>
            {
                setCharacters(response.data);
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
                    return <Character key={item.name} />;
                })
            }
        </div>
    );
};