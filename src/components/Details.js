// add details here

import React, { useState, useEffect } from 'react'
import { BASE_URL } from '../components/index'
import axios from 'axios'

export default function Details(props) {
  const { characterId, close } = props
  const [details, setDetails] = useState([])

  //console.log(`THIS IS THE CHARACTER URL: ${BASE_URL}/${characterId}`)

//   useEffect(() => {
//     axios.get(`${BASE_URL}/${characterId}`)
//       .then(res => { 
//           console.log(res.data);
//           setDetails(res.data) 
//         })
//       .catch(err => {
//            debugger 
//         })
//   }, [characterId])
    useEffect(() => {
        axios
        .get(`${BASE_URL}/${characterId}`)
        .then((res) => {
            console.log("yep", res.data.results);
            setDetails(res.data.results);
        })
        .catch((err) => {
            console.log("you have an Error", err);
        });
  }, [characterId]);

  //console.log(`this is details after invoking setDetails():${details.data}`)

  return (
    <div className='container'>
      <h2>Details:</h2>
      {/* {console.log(`Melissa's requested details: ${details}`)} */}
      {
        details &&
        <>
          <p>{details.name} is {details.species}</p>
          <p>Origin is {details.origin}</p>
      <p> {details.name} is currently {details.status}</p>
         
        </>
      }
      <button onClick={close}>Close</button>
    </div>
  )
}
