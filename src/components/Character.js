import { CharacterContainer, CharacterCard  } from './StylesComponents.js';
// Write your Character component here


function Character (props) {
  const characterData = props.props;
  console.log(characterData)

  return (
    <CharacterContainer>
      {characterData.map(e => {
        return (
          <CharacterCard>
            <h1>{e.name}</h1>
            <p>{e.name} was {e.gender == 'n/a' ? 'created' : 'born'} on {e.birth_year}.</p>
            <p>They stand at {e.height}cm and weigh {e.mass}kg</p>
            <p>They were in the following movies: <br />{e.films.map(e => <div>{e}</div>)}</p>
          </CharacterCard>
        );
      })}
    </CharacterContainer>
  );
}

export default Character;
