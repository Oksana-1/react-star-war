import React, {Component} from 'react';

import AppHeader from "./AppHeader/AppHeader";
import RandomPlanet from "./RandomPlanet/RandomPlanet";
import PeoplePage from "./PeoplePage/PeoplePage";
import PlanetsPage from "./PlanetsPage/PlanetsPage";
import StarshipPage from "./StarshipPage/StarshipPage";
import ErrorIndicator from "./ErrorIndicator/ErrorIndicator";

import "./App.css";

export default class App extends Component {
  state = {
    isRandomPlanet: true,
    selectedPersonId: null,
    isError: false
  }
  toggleRandomPlanet = () => {
    this.setState((state) => {
      return {
        isRandomPlanet: !state.isRandomPlanet
      }
    })
  }
  componentDidCatch(error, errorInfo) {
    this.setState({
      isError: true
    })
  }
  render() {
    const {isRandomPlanet, isError} = this.state;
    if (isError) {
      return <ErrorIndicator />
    }
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
        <PeoplePage />
        <PlanetsPage />
        <StarshipPage />
      </div>
    );
  }
};
