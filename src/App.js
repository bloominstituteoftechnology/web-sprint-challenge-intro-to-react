import React , {useState, useEffect} from 'react';
import './App.css';
import Character from "./components/Character"
import axios from "axios"


const App = () => {

 const [characterInfo, setCharacterInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();



  useEffect(() => {
    setLoading(true);
    axios.get('https://swapi.dev/api/people/')
    .then((res) => res.json())

    .then((res) => {
      setCharacterInfo(res.data.results);
    })

    .catch((err) => {
      setError(err)
    })
    .finally(() => {
      setLoading(false);
    });


    if (loading) {
      return <p>Data is loading...</p>;
    }
    if (error || !Array.isArray(characterInfo)) {
      return <p>There was an error loading your data!</p>;
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Star Wars</h1>
      <h2 className="Header">this will display but the code below wont for some reason even with no errors shown</h2>
      <p>does this happen to anyone else</p>
        <div>{characterInfo.map(props => {
          return <Character key={props.name} info={props} />})}
   </div> 
   </div>
  );
}









export default App;