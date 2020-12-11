// Write your Character component here
// Write your Character component here
import React from "react";
import styled from "styled-components";

const StyledList = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 4px 0 4px 0;

  button {
    border-radius: 4px;
  }
`;

export default function Character({ info, open }) {
  return (
    <div className="character">
      <StyledList>
        <h3>{info.name}</h3>
        <div>
          <button onClick={() => open(info.id)}>See details</button>
        </div>
      </StyledList>
    </div>
  );
}
