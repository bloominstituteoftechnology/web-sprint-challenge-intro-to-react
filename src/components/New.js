import React, { useState, useEffect } from 'react';
import axios from 'axios'

export default function New() {
    const defaultData = { name: '', status: '', species: '', location: '', img: ''} 
    const [ data, setData ] = useState(defaultData);
    const [ data1, setNew ] = useState(defaultData)
    useEffect(() => {
      axios.get('https://rickandmortyapi.com/api/character/3')
      .then(response => {
        console.log(response.data);
  
        setData(response.data)
      })
      .catch(error => {
        console.log('We have an error')
      })
    }, [])
    return (
        <div>
                   <h2>{data.name}</h2>
      <img width="200" height="200" src={data.image}></img>
      <p><strong>Gender: </strong>  {data.gender}</p>
      <p><strong>Status: </strong>  {data.status}</p>
      <p><strong>Species:</strong> {data.species}</p>
      <p><strong>Location:</strong> {data.location.name}</p> 
        </div>
    )
}
