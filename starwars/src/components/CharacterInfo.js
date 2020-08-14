import React, {useState, useEffect} from 'react'
import axios from 'axios'


const BASEURL = "https://swapi.py4e.com/api/people"

function CharacterInfo (props) {
    const{CharacterBio, close} = props
    const [bio, setbio] = useState(null)

    useEffect(() => {
        axios.get(`${BASEURL}`)
        .then(res => {
          console.log(res.data.results)
        })
        .catch(err => {
          console.log(err)
        })
      }, [CharacterBio])





    return(



        <div></div>
    )
}


export default CharacterInfo