import React from 'react';
import './App.css';
// import Search from './components/Search'
import Characters from './components/Characters'

const App = () => {

  // const [searchTerm, setSearchTerm] = useState('');



  // const getFilteredCharacters = () => {
  //   const term = searchTerm.trim().toLowerCase();
  //   if (!term) return characters;

  //   const filteredCharacters = characters.filter(character => {
  //     return character.name.toLowerCase().includes(term);
  //   })

  //   return filteredCharacters;
  // }
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {/* <Search  /> */}
      <Characters />
    </div>
  );
}

export default App;
