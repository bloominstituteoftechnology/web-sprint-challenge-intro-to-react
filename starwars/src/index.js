import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from "axios"

ReactDOM.render(<App />, document.getElementById('root'));

export default function Characters() {
    const [starWarsList, setList] = useState([])
        useEffect(() => {
            axios.get('https://swapi.dev/api/people/')
            .then(response => {
                console.log(response)
                setList(response.data)
          })
            .catch(error => console.log(error))
        }, [])
        
            return (
              <div className="star-wars-list">
                  {/* {starWarsList.map(pic => <img>{pic.img}</img>)} */}
              </div>
        )
    }
    