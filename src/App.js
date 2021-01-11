import React, {useState} from 'react';
import './App.css';
import dummyData from './dummyData.js';
import Characters from './components/Characters';


const App = () => {

  

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Characters data={dummyData}/>
  );
}

export default App;
