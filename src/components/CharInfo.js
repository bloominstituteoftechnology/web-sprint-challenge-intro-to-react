import React, {useEffect, useState} from "react";
import axios from "axios";
import styled, { keyframes } from 'styled-components';


// character height, films, weight


// i did not read what i needed to ... this will be for STRETCH

export default function CharInfo(props) {
    const {title, producer, director, releaseDate, chars} =props;

    const[films, setFilms] = useState([]);



      return (
        <StyledDetails key={friendId} className="container">
          <h2>Details:</h2>
          {
            details &&
            <>
              <p>{details.name} is {details.age}</p>
              <p>email is {details.email}</p>
              {name} likes:
              <ul>
                {
                  details.hobbies.map((like, idx) => <li key={idx}>{like}</li>)
                }
              </ul>
            </>
          }
          <button onClick={close}>Close</button>
        </StyledDetails>
      )
    }