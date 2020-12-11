// Write your Character component here
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

const Character = ({ name, height, birthYear, homePlanet }) => {
  const styleProp = {style: "padding-top: 60px"}

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <p>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
            {name}
            </a> 
          </p>
          <div class="collapse" id="collapseExample">
            <div class="card card-body">
             Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <p>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample1">
            {name}
            </a> 
          </p>
          <div class="collapse" id="collapseExample1">
            <div class="card card-body">
             Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Character;