import React, {Component} from 'react';

import AppHeader from "./AppHeader/AppHeader";
import RandomPlanet from "./RandomPlanet/RandomPlanet";
import ItemList from "./ItemList/ItemList";
import PersonDetails from "./PersonDetails/PersonDetails";

import "./App.css";

export default class App extends Component {
  state = {
    isRandomPlanet: true,
    selectedPersonId: null
  }
  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        isRandomPlanet: !state.isRandomPlanet
      }
    })
  }
  onPersonSelected = (selectedPersonId) => {
    this.setState({
      selectedPersonId
    })
  }
  render() {
    const {isRandomPlanet, selectedPersonId} = this.state;
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
            {
              selectedPersonId
                ? ( <PersonDetails personId={selectedPersonId}/> )
                : (<p>Choose the character from the list</p>)
            }
          </div>
        </div>
      </div>
    );
  }
};
