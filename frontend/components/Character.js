import React, { useState } from 'react';

function Character({ character }) {
  const [showHomeworld, setShowHomeworld] = useState(false);

  return (
    <div onClick={() => setShowHomeworld(!showHomeworld)}>
      <h2>{character.name}</h2>
      {showHomeworld && <p>{character.homeworld.name}</p>}
    </div>
  );
}

export default Character;
