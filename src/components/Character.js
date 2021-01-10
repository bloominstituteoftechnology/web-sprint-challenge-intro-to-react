import React, { useState } from "react";

export function Character(props) {
  const [mouseOver, setMouseOver] = useState(false);
  const [toggle, setToggle] = useState(false);

  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  return props.data.map((Character) => (
    <div>
      <h3
        className="Character"
        key={Character.birth_year}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={toggler}
        style={{ backgroundColor: mouseOver ? "#9e8f7f" : "#ddcdb3" }}
      >
        {Character.name}
      </h3>
      {toggle && (
        <div className="Details">
          <p>Height:{Character.height}</p>
          <p>Mass: {Character.mass}</p>
          <p>Hair Color: {Character.hair_color}</p>
          <p>Skin Color: {Character.skin_color} </p>
          <p>Eye Color: {Character.eye_color}</p>
          <p>Birth Year: {Character.birth_year}</p>
          <p>Gender: {Character.gender}</p>
        </div>
      )}
    </div>
  ));
}
