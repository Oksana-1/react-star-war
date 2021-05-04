import React, {Component} from 'react';

import AppHeader from "./AppHeader/AppHeader";
import RandomPlanet from "./RandomPlanet/RandomPlanet";
import ItemList from "./ItemList/ItemList";
import PersonDetails from "./PersonDetails/PersonDetails";

import "./App.css";

export default class App extends Component {
  state = {
    isRandomPlanet: true,
    selectedPerson: null
  }
  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        isRandomPlanet: !state.isRandomPlanet
      }
    })
  }
  onPersonSelected = (selectedPerson) => {
    this.setState({
      selectedPerson
    })
  }
  render() {
    const {isRandomPlanet, selectedPerson} = this.state;
    return (
      <div className="container">
        <AppHeader />
        {isRandomPlanet ? (<RandomPlanet />) : null}
        <p>
          <button
            type="button"
            className="btn btn-warning"
            onClick={this.toggleRandomPlanet}
          >
            Toggle Random Planet
          </button>
        </p>
        <div className="row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onPersonSelected}/>
          </div>
          <div className="col-md-6">
            <PersonDetails personId={selectedPerson}/>
          </div>
        </div>
      </div>
    );
  }
};
