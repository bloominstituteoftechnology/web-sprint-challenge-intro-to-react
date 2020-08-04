import React from "react";
import {
    Card, CardBody,
    CardTitle
  } from "reactstrap";

export default function Character(props){

    let {name, hair_color, birth_year, height, eye_color} = props;

    return(
        <div className="CardMain">
            <Card>
                <div className="CardTemp">
                <CardTitle><h1>{name}</h1></CardTitle>
                <CardBody>
                    
                    <div className="aligner">
                    <div className="left"> Born: </div>
                    <div className="right">{birth_year}</div>
                    </div>


                    <div className="aligner">
                    <div className="left">Hair Color: </div>
                    <div className="right">{hair_color}</div>
                    </div>
                    
                    <div className="aligner">
                    <div className="left">Eye Color: </div>
                    <div className="right">{eye_color}</div>
                    </div>

                    <div className="aligner">
                    <div className="left">Height: </div>
                    <div className="right">{height} cm</div>
                    </div>
                  
                </CardBody>
                </div>
            </Card>
        </div>
    )
}