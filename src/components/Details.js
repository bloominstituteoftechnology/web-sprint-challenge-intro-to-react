import React, { useState, useEffect } from "react";
import { BASE_URL, API_KEY } from "./index";
import styled from "styled-components";
import axios from "axios";

const StyledDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;

  img {
    width: 50%;
  }
  p {
    font-size: 1.4rem;
  }
  button {
    border-radius: 4px;
  }
`;
export default function Details(props) {
  const { characterId, close } = props;
  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/${API_KEY}/${characterId}`)
      .then((res) => {
        setDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [characterId]);

  return (
    <StyledDetails>
      {details && (
        <div>
          <h3>{details.name}</h3>
          <div className="img-container">
            <img src={details.image} alt={details.image} />
            <h6>Created: {details.created}</h6>
          </div>
          <p>Status: {details.status}</p>
          <p>Species: {details.species}</p>
          <p>Gender: {details.gender}</p>

          <br />
        </div>
      )}
      <button onClick={close}>Close</button>
    </StyledDetails>
  );
}
