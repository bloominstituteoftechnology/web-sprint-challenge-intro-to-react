// Write your Character component here
import React from "react";

export const Films = (props) => {
  return (
    <div className="d-flex flex-column">
      {props.films.map((film, idx) => (
        <p>
          <a href={film.idx}>{film}</a>
        </p>
      ))}
    </div>
  );
};

export const Character = (props) => {
  const handleClick = () => {};

  return (
    <div className="character gray-mask justify-content-center">
      <h3 className="display-4">{props.name}</h3>
      <div>{props.films && <Films films={props.films} />}</div>
      <div>
        <p>Birth Year: {props.birth_year}</p>
        <p>
          Mass <em>(approx.): </em>
          {props.mass} TWU (Tattoine Wamprat Units)
        </p>
        <p>Hair Color: {props.hair_color}</p>
      </div>

      <button className="glow-on-hover" onClick={handleClick}>
        Select
      </button>
    </div>
  );
};

export default function Characters(props) {
  const { characters } = props;

  return (
    <div className="characters">
      {characters.map((character) => {
        return <Character {...character} />;
      })}
    </div>
  );
}
