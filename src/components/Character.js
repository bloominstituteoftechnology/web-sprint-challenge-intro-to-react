// Write your Character component here
import React, { Component } from 'react'
import handlers from './Components/mock/handlers'


export default function Character(props) {
  const { characters } = props

  return (
    <div className='Characters container'>
      <p>{Character} </p>
    </div>
  )
}
