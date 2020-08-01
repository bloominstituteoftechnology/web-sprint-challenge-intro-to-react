import React from 'react';
import './App.css';
import Card from "./components/Card";


  // Try to think through what state you'll need for this app before starting. Then build out
const App = () => {

  return (
    <div className="App">
      <div>
      <h1 className="Header">React Wars</h1>
      </div>

      <div className="ReactFlex">
      <Card />
      </div>
    </div>
  );
}

export default App; 
