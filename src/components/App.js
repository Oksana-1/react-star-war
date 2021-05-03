import React from 'react';

import AppHeader from "./AppHeader/AppHeader";
import RandomPlanet from "./RandomPlanet/RandomPlanet";
import ItemList from "./ItemList/ItemList";
import PersonDetails from "./PersonDetails/PersonDetails";

import "./App.css";

const App = () => {
  return (
    <div>
      <AppHeader />
      <RandomPlanet />

      <div className="row mb2">
        <div className="col-md-6">
          <ItemList />
        </div>
        <div className="col-md-6">
          <PersonDetails />
        </div>
      </div>
    </div>
  );
};

export default App;
