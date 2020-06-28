// Write your Character component here
import React from "react";
import '../App.css'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
export default function Character(props) {
  let card = props.characters.map((e) => {
    return (
        <div className="card">
            <div>
                <h2>{e.name}</h2>
                <h2>{Math.round(e.height/12)} LBS</h2>
            </div>

        </div>
 
        
        
        
        )
    ;
  });
  console.log(props.characters);
  return (
    <div>
      <div>{card}</div>
    </div>
  );
}
