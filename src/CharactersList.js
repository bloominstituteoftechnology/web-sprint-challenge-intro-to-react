import React, {useState, useEffect} from 'react';
import BASE_URL from './components/constants/index';
import './App.css';
import axios from 'axios';
import styled from 'styled-components'

const Lists = styled.div`
    padding: 12px 25px 12px 25px; 
    `;

  const Span = styled.span`
  font-weight: bold;
  font-size: 0.8rem;
  `;

  const P = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 350;
    word-spacing: 3px;
    text-align: justify
  `;

export default function CharacterList() {
const [characters, setCharacters] = useState([]);
const people = 'people/';
const sequence = (Math.floor(Math.random() *15) + 1);
const string = `${BASE_URL}${people}${sequence}`;
/* const [starships, setStarships] = useState([]);
const [vehicles, setVehicles] = useState([]);
const [homeworld, setHomeworld] = useState([]); */

useEffect(() => {
    const fetchData = () => {
    axios
      .get(string)
        .then((res) => {
          setCharacters(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      }
      fetchData();
    },[]);
    console.log(characters);

    /* useEffect(() => {
    const fetchShips = () => {
       characters.starships ?
              setStarships(characters.starships.map(ship => ship))
              : setStarships(0);

            characters.vehicles ? 
            axios.get(characters.vehicles)
            .then((res2)=> setVehicles(res2.name))
            : setVehicles(0);
            console.log(characters.homeworld)
            axios.get(characters.homeworld)
            console.log(characters.homeworld)
            .then((home)=> setHomeworld(home.data.name))
        .catch((err) => {
            console.log(err)
        });
      }
      fetchShips();
    },[]); */
    /* console.log(homeworld); */

    
    return (
        <Lists>
        {characters && (
        <>
        <P> Name: {characters.name} </P>
        <P> Birth Year: {characters.birth_year} </P>
        <P> Gender: {characters.gender} </P>
        <P> Height: {characters.height}" </P>
        <P> Mass: {characters.mass} </P>
        <P> Eye Color: {characters.eye_color} </P>
        <P> Skin Color: {characters.skin_color} </P>
        <Span>
        </Span>
        </>
        )}
        </Lists>
    );
}