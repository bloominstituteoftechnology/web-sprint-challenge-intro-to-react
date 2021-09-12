import React, {useEffect, useState} from "react";
import { MOVIE_URL } from "../constants";
import axios from "axios";
import styled, { keyframes } from 'styled-components';

const kf = keyframes`
100% {
    opacity: 1;
    transform: scale(1) rotateZ(0);
  }
`

const StyledFilms = styled.div`
    border:6px dashed green;
    transform: scale(1) rotateZ(0);
    animation: ${kf} 0.5s ease-in-out forwards;
`

// character height, films, weight


// i did not read what i needed to ... this will be for STRETCH

export default function FilmsInfo(props) {
    const {filmId, close, chars} =props;

    const[film, setFilms] = useState(null);

    useEffect(() => {
        axios.get(`${MOVIE_URL}`)
          .then(res => { setFilms(res.data) })
          .catch(err => { debugger }) // eslint-disable-line
  
          return console.log('THIS IS IT');
    }, [filmId]);


    return (
        <StyledFilms key={filmId} className="container">
          <h2>Films:</h2>
          {
            film &&
            <>
              <p>{film.title} was written in {film.release_date}</p>
              <p>Produced by: {film.producer}</p>
              {chars} Other actors include:
              <ul>
                {
                film.films.map((movie, idx) => <li key={idx}>{movie}</li>)
                }
              </ul>
            </>
          }
          <button onClick={close}>Close</button>
        </StyledFilms>
      )
    }