import React, { Component } from "react";
import "./RandomPlanet.css";
import StarDbAPIService from "../../api";
import Spinner from "../Spinner/Spinner";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import PlanetView from "../PlanetView/PlanetView";
const apiService = new StarDbAPIService();

export default class RandomPlanet extends Component {
	state = {
		planet: {},
		isLoading: true,
		isError: false,
		isVisible: true,
	};
	onPlanetLoaded = (planet) => {
		this.setState({
			planet,
			isLoading: false,
		})
	}
	onError = () => {
		this.setState({
			isError: true,
			isLoading: false,
		});
	}
	updatePlanet = () => {
		const id = Math.floor((Math.random()*25) + 2);
		apiService.getPlanetById(id)
		.then(this.onPlanetLoaded)
		.catch(this.onError);
	}
	componentDidMount() {
		this.updatePlanet();
		//this.interval = setInterval(this.updatePlanet, 3000);
	}
	componentWillUnmount() {
		//clearInterval(this.interval);
	}
	render() {
		const { planet, isLoading, isError } = this.state;
		return (
			<div className="random-planet jumbotron rounded">
				{
					isError ? <ErrorIndicator/> :
						isLoading ? <Spinner/> :
						<PlanetView planet={planet}/>
				}
			</div>
		);
	}
}