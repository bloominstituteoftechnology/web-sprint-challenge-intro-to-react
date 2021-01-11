import React, { useEffect } from 'react';
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
  // const [homeworldData, setHomeworldData] = useState({}); // yank to parent
  const { name, height, mass, hair_color, skin_color, eye_color, birth_year, gender } = data;
  const { homeworld, films, species, vehicles, starships } = data; // apis
  const { setHomeworldData } = data; // props to pass to child
  // console.log("data in Character: ", data); // it works
 
  // useEffect(() => {
  //   const homeworldPromise = axios.get(homeworld); // .data
  //   const filmsPromise = axios.get(films);  // .data
  //   const speciesPromise = axios.get(species);  // .data
  //   const vehiclesPromise = axios.get(vehicles); // mult api
  //   const starshipsPromise = axios.get(starships); // mult api

  //   Promise.all([homeworldPromise, filmsPromise, speciesPromise, vehiclesPromise, starshipsPromise])
  //     .then((values) => {
  //     console.log(values);
  //     })
  //     .catch(err => console.log(err));

  //   }, []);

  useEffect(() => {

    axios.get(homeworld)
    .then(res => {
      // set data to state here
      console.log("res: ", res)
      setHomeworldData(res.data);
      console.log("Homeworld data; ", res.data);
    })
    .catch(err => console.log("Error: ", err));

  }, []); // fetch homeworldData, return homeworld object, need obj.name

  const StyledDiv = styled.div`
  color: palevioletred;
  font-weight: bold;
`;

  return (
    <div className="character-container">
      {/* <StyledDiv> */}
        <Card  class='card'>
          <CardTitle>{name}</CardTitle>
          <CardText>
            height: {height} <br/>
            mass: {mass} <br/>
            hair color: {hair_color} <br/>
            skin color: {skin_color} <br/>
            eye color: {skin_color} <br/>
            birth year: {birth_year} <br/>
            gender: {gender} <br/>
          </CardText>
          {/* <Homeworld homeworldData={homeworldData} /> */}
        </Card>
      

      {/* </StyledDiv> */}
   


    </div>

    
  );


 

}

// const StyledDiv = styled.div`
// background: white;
// width: 50%;
// `;
