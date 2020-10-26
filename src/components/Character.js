import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Character = ({pokemon}) => {
    const [pokemonData, setPokemonData] = useState({name: pokemon.name});

    useEffect(() => {
        axios
            .get(pokemon.url)
            .then(({data}) => {
                setPokemonData({
                    name: pokemon.name,
                    imgUrl: data.sprites.front_default,
                    types: data.types
                });
            })
            .catch(err => {
                console.log(err);
            });
    }, [pokemon]);

    return (
        <Card>
            <Name>{capitalize(pokemonData.name)}</Name>
            {(pokemonData.imgUrl) ? <Image src={pokemonData.imgUrl} /> : null}
            <TypesContainer>
                {(pokemonData.types) ? pokemonData.types.map(type =>
                    <Type type={type.type.name} key={type.slot}>{capitalize(type.type.name)}</Type>
                ) : null}
            </TypesContainer>
        </Card>
    );
};

const capitalize = str => str[0].toUpperCase() + str.substring(1);

const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 120px;
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    background-color: skyblue;
`;

const Name = styled.h3`
    margin: 3px 0;
`;

const Image = styled.img`

`;

const TypesContainer = styled.div`
    margin: 3px 0;
`;

const Type = styled.span`
    margin: 0 3px;
    padding: 3px 6px;
    border-radius: 10px;
    background-color: ${({type}) => {
        return typeColors[type];
    }};
`;

const typeColors = {
    normal: '#A8A77A',
    fire:  '#EE8130',
    water:  '#6390F0',
    electric:  '#F7D02C',
    grass:  '#7AC74C',
    ice:  '#96D9D6',
    fighting:  '#C22E28',
    poison:  '#A33EA1',
    ground:  '#E2BF65',
    flying:  '#A98FF3',
    psychic:  '#F95587',
    bug:  '#A6B91A',
    rock:  '#B6A136',
    ghost:  '#735797',
    dragon:  '#6F35FC',
    dark:  '#705746',
    steel:  '#B7B7CE',
    fairy:  '#D685AD'
}

export default Character;