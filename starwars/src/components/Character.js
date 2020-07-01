// Write your Character component here
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard'
// import styled from 'styled-components'

function CharacterData() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
        .get(`https://rickandmortyapi.com/api/character`)
        .then(res => {
            console.log( 'res from useEffect of CharacterCard', res);
            setData(res.data);
        })
        .catch(err => {
            console.log('Error occured in useEffect of CharacterCard', err);
        });
    }, []);

    return(
        <div>
            {data.map(props => {
                return (
                    <CharacterCard
                    key={props.id}
                    image={props.image}
                    name={props.name}
                    species={props.species}
                    gender={props.gender}
                    status={props.status}
                    />
                )
            })}
        </div>
    );
};

export default CharacterData;