import React, {Component} from 'react';
import AppHeader from "./AppHeader/AppHeader";
import RandomPlanet from "./RandomPlanet/RandomPlanet";
import ItemPage from "./ItemPage/ItemPage";
import ErrorIndicator from "./ErrorIndicator/ErrorIndicator";
import StarDbAPIService from "../api";

import "./App.css";

export default class App extends Component {
  api = new StarDbAPIService();
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
        <ItemPage
          getData={this.api.getPeople}
          getItemById={this.api.getPersonById}
          getImageUrl={this.api.getPersonImageUrl}
        />
      </div>
    );
  }
};
