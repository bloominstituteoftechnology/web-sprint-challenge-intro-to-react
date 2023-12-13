import React, { useState } from 'react';

function Character({ character }) {
  const [showHomeworld, setShowHomeworld] = useState(false);

  return (
    <div className="character-card" onClick={() => setShowHomeworld(!showHomeworld)}>
      <h2 className="character-name">{character.name}</h2>
      {showHomeworld && <p className="character-planet">{character.homeworld.name}</p>}
    </div>
  );
}

export default Character;
