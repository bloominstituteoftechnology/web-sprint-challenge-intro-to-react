import React, { useState } from 'react';

function Character({ name, homeworld }) {  
  const [showHomeworld, setShowHomeworld] = useState(false);
  
  const toggleHomeworld = () => {
    setShowHomeworld(prevState => !prevState);
  }; // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  return (
    <div onClick={toggleHomeworld} style={{ cursor: 'pointer' }}>
      <h3>{name}</h3>
      {showHomeworld && (
        <p className="character-planet">Planet: {homeworld}</p>
      )}
      {/* Use the same markup with the same attributes as in the mock */}
</div>
  );
}

  
 



export default Character;
