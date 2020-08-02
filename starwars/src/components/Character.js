// Write your Character component here
import React, {useState} from "react";
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';

function Character(props) {

    const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
   

return (

    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
    <DropdownToggle
      tag="span"
      data-toggle="dropdown"
      aria-expanded={dropdownOpen}
    >
    {props.name}
    </DropdownToggle>
    <DropdownMenu>
      <div onClick={toggle}>Tsstt</div>
      <div onClick={toggle}>Custom dropdown item</div>
      <div onClick={toggle}>Custom dropdown item</div>
      <div onClick={toggle}>Custom dropdown item</div>
    </DropdownMenu>
  </Dropdown>

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
