import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Characters extends React.Component {
  state = {
    characters: []
  }

  componentDidMount() {
    axios.get(`https://swapi.dev/api/people`)
      .then(res => {
        const characters = res.data;
        this.setState({ characters });
      })
  }

  componentWillUnmount() {

}


  render() {
    return (
        <div className="page-slider">
            { this.state.characters.map(character => 
                <div className="character-container">
                        <div className="character-header">
                            <Link exact to={'/character/' + character.url.slice('https://swapi.dev/api/people/')}>
                                <div className="character-name">
                                    <h5>{character.name}</h5>
                                </div>
                            </Link>
                        </div>
                    <div className="character-body">
                        <div className="character-stats">
                            <div className="character-stat">
                                <p>Age: {character.birth_year}</p>
                            </div>
                            <div className="character-stat">
                                <p>Height: {character.height}</p>
                            </div>
                            <div className="character-stat">
                                <p>Weight: {character.mass}</p>
                            </div>
                            <div className="character-stat">
                                <p>Hair Color: {character.hair_color}</p>
                            </div>
                            <div className="character-stat">
                                <p>Eye Color: {character.eye_color}</p>
                            </div>
                        </div>
                    </div>

                </div>
            )}
        </div>
    )}
}