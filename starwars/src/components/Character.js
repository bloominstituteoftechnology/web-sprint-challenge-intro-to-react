// Write your Character component here
import React, {useState} from 'react'


const CharacterInfo = (props) => {
    const [showDetails, setShowDetails] = useState(false)

    const toggleDetails = event => {
        event.preventDefault()
        setShowDetails(!showDetails)
    }


    return( 
    
        <div className='info-card'>
            
            <img src={props.result.image} alt={`${props.result.name}`}></img>
            <button onClick={ event => {toggleDetails(event)}}>
                {
                    showDetails ? 'Hide Info':'Show Info'
                }
            </button>
            {
                showDetails && (
                    <div className='card-text'>
                        <h2>{props.result.name}</h2>
                        <p>Species: {props.result.species}</p>
                        <p>Status: {props.result.status}</p>
                    </div>
                )
            }
          
        </div>
        
    )
}

export default CharacterInfo