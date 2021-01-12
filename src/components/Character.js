import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import styled from 'styled-components';
import {
  Card, CardText, 
  CardTitle, 
} from 'reactstrap';
import Films from './Films.js';
import Homeworld from './Homeworld.js';
import Species from './Species.js';
import Starships from './Starships.js';
import Vehicles from './Vehicles.js';


export default function Character({data}) {
  const [homeworldData, setHomeworldData] = useState({});
  const [filmsData, setFilmsData] = useState([]); 
  const [speciesData, setSpeciesData] = useState([]); 
  const [starshipsData, setStarshipsData] = useState([]); 
  const [vehiclesData, setVehiclesData] = useState([]); 

  const { name, height, mass, hair_color, skin_color, eye_color, birth_year, gender } = data;
  const { homeworld, films, species, vehicles, starships } = data; // apis

  console.log("species: ",species);

  useEffect(() => {
    axios.get(homeworld)
    .then(res => {
      setHomeworldData(res.data);
    })
    .catch(err => console.log("Error: ", err));
  }, []); // fetch homeworldData, set state to homeworld object

  useEffect(() => {

    const filmPromises = films.map(api => {
      return axios.get(api)
    });

    Promise.all(filmPromises)
      .then((values) => {
      // console.log("Values: ", values); // need to go into .data

      const filmNames = values.map(object => {
        return object.data.title;
      });

      setFilmsData(filmNames);

      })
      .catch(err => console.log(err));

    }, []); // fetch filmsData, set state to [] of strings

    useEffect(() => {

      const speciesPromises = species.map(api => {
        return axios.get(api)
      });
  
      Promise.all(speciesPromises)
        .then((values) => {
        console.log("Values: ", values); // need to go into .data
  
        const speciesNames = values.map(object => {
          return object.data.name;
        });
  
        setSpeciesData(speciesNames);
  
        })
        .catch(err => console.log(err));
  
      }, []); // fetch speciesData, set state to [] of string

    useEffect(() => {

      const starshipsPromises = starships.map(api => {
        return axios.get(api)
      });
  
      Promise.all(starshipsPromises)
        .then((values) => {
        console.log("Values: ", values); // need to go into .data
  
        const starshipsNames = values.map(object => {
          return object.data.name;
        });
  
        setStarshipsData(starshipsNames);
  
        })
        .catch(err => console.log(err));
  
      }, []); // fetch starshipsData, set state to [] of strings

      useEffect(() => {

        const vehiclesPromises = vehicles.map(api => {
          return axios.get(api)
        });
    
        Promise.all(vehiclesPromises)
          .then((values) => {
          console.log("Values: ", values); // need to go into .data
    
          const vehiclesNames = values.map(object => {
            return object.data.name;
          });
    
          setVehiclesData(vehiclesNames);
    
          })
          .catch(err => console.log(err));
    
        }, []); // fetch vehiclesData, set state to [] of strings



  // useEffect(() => {

  //   const speciesPromise = axios.get(species);  // .data
  //   const vehiclesPromise = axios.get(vehicles); // mult api
  //   const starshipsPromise = axios.get(starships); // mult api

  //   Promise.all([homeworldPromise, filmsPromise, speciesPromise, vehiclesPromise, starshipsPromise])
  //     .then((values) => {
  //     console.log(values);
  //     })
  //     .catch(err => console.log(err));

  //   }, []);



  // useEffect(() => {
  //   axios.get(homeworld)
  //   .then(res => {
  //     // set data to state here
  //     console.log("res: ", res)
  //     setHomeworldData(res.data);
  //     console.log("Homeworld data from Character: ", res.data);
  //   })
  //   .catch(err => console.log("Error: ", err));

  // }, []); // fetch homeworldData, return homeworld object, need obj.name



  return (
    <div className="character-container">
      {/* <StyledDiv> */}
        <Card>
          <CardTitle style={{ color: "black" }}>{name}</CardTitle>
          <CardText>
            height: {height} <br/>
            mass: {mass} <br/>
            hair color: {hair_color} <br/>
            skin color: {skin_color} <br/>
            eye color: {skin_color} <br/>
            birth year: {birth_year} <br/>
            gender: {gender} <br/>
          </CardText>
         
        </Card>
        <Homeworld homeworldData={homeworldData}/>
        <Films filmsData={filmsData}/>
        <Species speciesData={speciesData}/>
        <Starships starshipsData={starshipsData}/>
        <Vehicles vehiclesData={vehiclesData}/>

    </div>

    
  );


 

}

// const StyledDiv = styled.div`
// background: white
// width: 50%;
// `;
