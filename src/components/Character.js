import React from "react";

export const Character = (props) => {
  return props.data.map((Character) => (
    <h3 className="Character" key={Character.birth_year}>
      {Character.name}
    </h3>
  ));
};
