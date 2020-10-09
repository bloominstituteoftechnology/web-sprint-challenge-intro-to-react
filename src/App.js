import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import styled from "styled-components";

export default function App() {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [allPeople, setAllPeople] = useState([]);
  const [allVehicles, setAllVehicles] = useState([]);
 

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://swapi.dev/api/people/")
        .then((evt) => {
          console.log(evt);
          setAllPeople(evt.data.results);
        })
        .catch((err) => {
          debugger;
        });
    };
    fetchData();
  }, []);

  const StyledAccordionDiv = styled.div`
    max-width: 400px;
    margin-left: 28%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    overflow: hidden;
    font-family: "Quicksand", sans-serif;
    background: crimson;
    &:hover {
      background: gold;
    }
  `;
  const StyledAccordionLabel = styled.label`
    padding: 14px 20px;
    display: block;
    color: white;
    font-weight: 500;
    font-size: 2rem;
    position: relative;
    transition: background 0.1s;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      right: 20px;
      width: 12px;
      height: 6px;
      background-image: url('data:image/svg+xml;utf8,<svg width="100" height="50" xmlns="http://www.w3.org/2000/svg"><polygon points="0,0 100,0 50,50" style="fill:%23FFFFFF99;" /></svg>');
      background-size: contain;
      transition: transform 0.4s;
    }
  `;
  const StyledAccordionContent = styled.div`
    padding: 14px 20px;
    background: lightcoral;
    line-height: 1.6;
    font-size: 0.85em;
    display: none;
  `;

  const StyledAccordionInput = styled.input`
    display: none;
    &:checked ~ .accordion_content {
      display: block;
    }
    &:checked ~ .accordion__label::after {
      transform: translateY(-50%) rotate(0.5turn);
    }
  `;

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {allPeople.map((char) => {
        return (
          <>
            <StyledAccordionDiv className="accordion">
              <div>
                <StyledAccordionInput
                  type="checkbox"
                  name="starwars_accordion"
                  id={char.name}
                  className="starwars__input"
                ></StyledAccordionInput>
                <StyledAccordionLabel
                  htmlFor={char.name}
                  className="accordion__label"
                >
                  {char.name}
                </StyledAccordionLabel>
                <StyledAccordionContent
                  key={char.name}
                  className="accordion_content"
                >
                  Birth Year: {char.birth_year} <br></br>
                  Eye Color: {char.eye_color} <br></br>
                  Gender: {char.gender}
                  <br></br>
                  Hair Color: {char.hair_color} <br></br>
                  Mass: {char.mass}
                  <br></br>
                  starships:{allVehicles}
                  {/* {char.vehicles.map((vehicle) => {
                    axios
                      .get(`${vehicle}`)
                      .then((evt) => {
                        setAllVehicles(evt.data.name);
                      })
                      .catch((err) => {
                        debugger;
                      });
                    {allVehicles}
                  })} */}
                </StyledAccordionContent>
              </div>
            </StyledAccordionDiv>
          </>
        );
      })}
    </div>
  );
}
