import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import styled from 'styled-components';


const WRAPPER = styled.div`
	width: 80%;
	max-width: 850px;
	margin: 20px auto;
	display: flex;
	flex-direction: row;
     flex-wrap: wrap;
	align-items: center;
	padding: 20px;
`;

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
          <WRAPPER>
			<div>
				{data.map((character) => {
					return (
						<p>
							<Character
								name={character.name}
                                        gender={character.gender}
                                        birth_year={character.birth_year}
							/>
						</p>
					);
				})}
			</div>
		</WRAPPER>
          );
};

export default App;
