// Write your Character component here
import React, {useState, useEffect} from 'react'

export default function Character({ info, action }) {
    return (
      <div  className='character'>
        {info.name}
        <button onClick={() => action(info.id)}>
          See details
        </button>
      </div>
    )
  }