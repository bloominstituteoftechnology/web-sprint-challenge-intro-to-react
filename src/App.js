import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from "./components/Header";
import Home from "./components/Home";
import Characters from "./components/Characters";
import Planets from "./components/Planets";
import PageNav from './components/PageNav';



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <BrowserRouter >
      <PageNav />
      <Header />
      <div className="page-container">
          <div className="page">
            <Switch >
              <Route exact path="/">
                  < Home />
              </Route>
              <Route exact path="/characters">
                <Characters />
              </Route>
              <Route exact path="/planets">
                <Planets />
              </Route>
              <Route exact path="/films">
                {/* <FilmList /> */}
              </Route>
              <Route exact path="/species">
                {/* <SpecieList /> */}
              </Route>
              <Route exact path="/vehicles">
                {/*   <VehicleList /> */}
              </Route>
              <Route exact path="/starships">
                {/*   <StarshipList /> */}
              </Route>
            </Switch>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
