  
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
     const [data, setData] = useState('');

     useEffect(() => {
          axios.get(
               'https://swapi.dev/api/people/1/'
          )
               .then((returnedData) => {
                    console.log('file: App.js ~ line 14 ~ .then ~ returnedData', returnedData);
                    setData(returnedData.data);
                    
               })
               .catch((error) => {
               console.log('file: App.js ~ line 18 ~ useEffect ~ error', error);
                    
               })
               .finally(() => {
                    console.log('file: App.js ~ line 22 ~  Promise Complete');
               });
     }, []);

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
