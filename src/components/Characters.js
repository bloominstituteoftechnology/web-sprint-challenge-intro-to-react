// Write your Character component here
import React from "react";

export const Films = (props) => {
  return (
    <div
      className="d-flex justify-content-center col-md-12 flex-column"
      style={{ textAlign: "center" }}
    >
      {props.films.map((film, idx) => (
        <p style={{ textAlign: "center" }}>
          <a href="{film.idx}" style={{ color: "#CCC", textAlign: "center" }}>
            {film}
          </a>
        </p>
      ))}
    </div>
  );
};

export const Starships = (props) => {
  return (
    <div className="d-flex justify-content-start col-sm-12 flex-column">
      {props.starships.map((starship, idx) => (
        <p style={{ fontSize: '.9rem', textAlign: "center" }}>
          <a
            href="{starship.idx}"
            style={{ color: "#CCC", textAlign: "center" }}
          >
            {starship}
          </a>
        </p>
      ))}
    </div>
  );
};

export const Character = (props) => {
  const handleClick = () => {};

  return (
    <div className="character d-flex justify-content-center container">
      <div className="smokey-bg container">
        <h3 className="display-4" style={{ fontSize: "2rem", margin: "2rem" }}>
          {props.name}
        </h3>
        <div className="line-up" style={{ margin: "3rem auto" }}>
          ""
        </div>
        <div className="row d-flex">
          <div className="col-lg-6 d-flex flex-column space-around">
            <p style={{ fontSize: "2rem" }}>Films:</p>
            {props.films && <Films films={props.films} />}
          </div>
          <div className="col-lg-6 d-flex flex-column space-around">
            <p style={{ fontSize: "2rem" }}>Starships:</p>

            {props.starships && <Starships starships={props.starships} />}
          </div>
        </div>
        <div className="text-shadow">
          <p style={{ fontSize: "2rem", marginTop: "1.5rem" }}>Vitals:</p>
          <p>Birth Year: {props.birth_year}</p>
          <p>
            Mass <em>(approx.): </em>
            {props.mass} TWU (Tattoine Wamprat Units)
          </p>
          <p>Hair Color: {props.hair_color}</p>
          <p>Height: {props.height}</p>
          <p>Skin Color: {props.skin_color}</p>
          <p>Gender: {props.gender}</p>
        </div>

        <button
          className="glow-on-hover"
          style={{ margin: "3rem auto" }}
          onClick={handleClick}
        >
          Select
        </button>
      </div>
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
