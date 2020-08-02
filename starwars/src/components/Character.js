// Write your Character component here
import React, {useState} from "react";
import { Collapse, Button, CardBody, Card } from 'reactstrap';



function Character(props) {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);


return (

  <div>
  <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>{props.name}</Button>
  <Collapse isOpen={isOpen}>
    <Card>
      <CardBody>
      Anim pariatur cliche reprehender
      enim eiusmod high life accusamus terry richardson ad squid. Nihil
       anim keffiyeh helvetica, craft beer labore wes anderson cred
       nesciunt sapiente ea proident.
      </CardBody>
    </Card>
  </Collapse>
</div> 

)

    // <li className="character-info">

    //     <h2>Character Name: {props.name}</h2>
    //     <p>Mass:{props.mass}</p>
    //     <p>height:{props.height}</p>
    //     <p>gender:{props.gender}</p>
    //     <p>eye_color:{props.eye_color}</p>
    //     <p>birth_year:{props.birth_year}</p>
    // </li>

}

export default Character;
