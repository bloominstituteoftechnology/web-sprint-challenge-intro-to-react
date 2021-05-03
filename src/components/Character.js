// Write your Character component here
import React from 'react'
import {useState} from 'react'
import axios from 'axios'


export default function Character(props){
    const [data, useData] = useState(null)

    useEffect(()=>{
        axios
        .get('https://swapi.dev/api/people')
        .then(({data}) => useData(data))
        .catch(err =>{
            console.log(err)})
    },[])


}