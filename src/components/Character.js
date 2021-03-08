// Write your Character component here
import React, { useState, useEffect } from 'react';
import './App.css';
import styled from 'styled-components'
import axios from 'axios'
import App from '../App'
import Button from './Button'


export default function Character(props) {

    const { friends, setFriends } = props

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/`)
        .then(data => setFriends(data.results.name)
        ) }, [friends])
    
        console.log(data);
        

    return (
        <div className= 'character-div container'>
            <h2>Name: { results.name }</h2>
            <h3>Gender: { results.gender }</h3>
            <Button type="primary">See Details</Button>
        </div>
    )
      
}
