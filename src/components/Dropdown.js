import React, { useState, useEffect} from "react";
import DropdownCreator from "./DropdownCreator";



const Dropdown = (props) => {
    const { characters }= props
    const [currentCharacter, setCurrentCharacter] = useState()
    const [display, setDisplay] = useState(true)

    return( 
        <div>
            <button onClick={() => setDisplay(!display)}>Placeholder</button>
            <div className="dropdown-content">
                {display && <DropdownCreator characters={characters}/>}
            </div>
        </div>
    )


}

export default Dropdown