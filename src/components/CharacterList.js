import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Character from './Character';

const CharacterList = ({range}) => {
    const [pokemonList, setPokemonList] = useState([]);
    
    useEffect(() => {
        let params = {
            offset: range[0] - 1,
            limit: range[1] - range[0] + 1
        };

        axios
            .get('https://pokeapi.co/api/v2/pokemon', {params: params})
            .then(({data: {results}}) => {
                setPokemonList(results);
            })
            .catch(err => {
                console.log(err);
            });
    }, [range]);

    return (
        <List>
            {pokemonList.map((pokemon, i) => 
                <Character pokemon={pokemon} key={i} />
            )}
        </List>
    );
};

const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

export default CharacterList;
