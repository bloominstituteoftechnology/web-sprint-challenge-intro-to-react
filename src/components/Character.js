// Write your Character component here
import React from "react";
// import cuid from "cuid";
// import styled from "styled-components";

const Character = (props) => {
  console.log("props", props);
  return (
    <div>
      <h2>{props.character}</h2>
    </div>
  );
};

export default Character;
