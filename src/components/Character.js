// Write your Character component here
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

const Character = ({ character }) => {

  
  

  return (
    
    <div className="accordion" id="accordionExample">
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingOne">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          {character.name}
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          
        
          <div className="card card-body top">
            <p className="card-text">
              Height: {character.height} <br />
              Mass: {character.mass} <br />
              Hair Color: {character.hair_color} <br />
              Skin Color: {character.skin_color} <br />
              Eye: {character.eye_color} <br />
              Birth Year: {character.birth_year} <br />
              Gender: {character.gender} <br />
            </p>
          </div>
        

        </div>
      </div>
    </div>
    </div>
    
  )
}

export default Character;


