// Write your Character component here
import React from 'react'

function Character(props) {
  return (  
<div>
  <h2>{props.name}</h2>
  <button> Click to know more </button>
</div>
  )
}

export default Character