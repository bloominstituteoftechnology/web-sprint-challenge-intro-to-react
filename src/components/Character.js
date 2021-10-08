import React, { useState, useEffect } from 'react'

import axios from 'axios'


export default function Character(props) {
const [character, setDetails] = useState(null)

useEffect(() => {
    axios.get(`https://swapi.dev/api/people`)
      .then(res => {
        console.log(res);
      }).catch(err => {
        console.error(err);
      })
  }, []
)

return(
    <div className='container'>
    </div>
)
}
