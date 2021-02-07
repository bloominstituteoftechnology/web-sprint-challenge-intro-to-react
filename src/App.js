import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';

const App = () => {
     const [data, setData] = useState([]);
     
     
     useEffect(() => {
          axios.get('https://swapi.dev/api/people/')
               .then((returnedData) => {
                    setData(returnedData.data);              
               })
               .catch((error) => {
                    console.log(
                         'file: App.js ~ line 18 ~ useEffect ~ error',
                         error
                    );
               })
               .finally(() => {
                    console.log('file: App.js ~ line 22 ~  Promise Complete');
               });
     }, []);

     return (
          <div className="App">
			<div className="Header">Characters</div>
			<div>
				{data.map((character) => {
					return (
						<p>
							<Character
								name={character.name}
								gender={character.gender}
							/>
						</p>
					);
				})}
			</div>
		</div>
          );
};

export default App;
