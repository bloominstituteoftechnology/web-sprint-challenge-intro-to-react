// Write your Character component here
import React from "react";

const Character = (props) => {
  const { data } = props;
  let mappedData = data.map((element) => {
    let resultsMapped = element.results;
    return resultsMapped;
  });
  return <div>{resultsMapped}</div>;
};

export default Character;
