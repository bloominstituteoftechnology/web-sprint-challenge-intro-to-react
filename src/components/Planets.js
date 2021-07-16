import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Planets extends React.Component {
  state = {
    planets: []
  }

  componentDidMount() {
    axios.get(`https://swapi.dev/api/planets`)
      .then(res => {
          console.log(res);
        const planets = res.data;
        this.setState({ planets });
        alert('A component was just mounted');
      })
  }

  componentWillUnmount() {
    alert('The component is going to be unmounted');
}

/* a */
  render() {
    return (
        <div className="page-slider">
        { this.state.planets.map(planet => 
                <div className="character-container">
                        <div className="character-header">
                            <Link exact to={'/planet/' + planet.url.slice('https://swapi.dev/api/planets/')}>
                                <div className="character-name">
                                    <h5>{planet.name}</h5>
                                </div>
                            </Link>
                        </div>
                    <div className="character-body">
                        <div className="character-stats">
                            <div className="character-stat">
                                <p>Local Day Lenth: {planet.rotation_period}</p>
                            </div>
                            <div className="character-stat">
                                <p>Local Year Length: {planet.orbital_period}</p>
                            </div>
                            <div className="character-stat">
                                <p>Gravitaional Force: {planet.gravity}</p>
                            </div>
                            <div className="character-stat">
                                <p>Diameter: {planet.diameter}</p>
                            </div>
                            <div className="character-stat">
                                <p>Terrain: {planet.terrain}</p>
                            </div>
                            <div className="character-stat">
                                <p>Population: {planet.population}</p>
                            </div>
                        </div>
                    </div>

                </div>
            )}
        </div>
    )}
}