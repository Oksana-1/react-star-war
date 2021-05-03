import React, { Component } from "react";
import "./RandomPlanet.css";
import StarDbAPIService from "../../api";
import Spinner from "../Spinner/Spinner";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
const apiService = new StarDbAPIService();

export default class RandomPlanet extends Component {
	state = {
		planet: {},
		isLoading: true,
		isError: false,
	};
	constructor() {
		super();
		this.updatePlanet();
	}
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
const PlanetView = ({ planet }) => {
	const  { id, name, population, rotationPeriod, diameter} = planet;
	return (
		<React.Fragment>
			<img className="planet-image"
				 src={`${apiService.imageBaseUrl}/planets/${id}.jpg`}
				 alt="planet"
			/>
			<div>
				<h4>{name}</h4>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<span className="term">Population</span>
						<span>{population}</span>
					</li>
					<li className="list-group-item">
						<span className="term">Rotation Period</span>
						<span>{rotationPeriod}</span>
					</li>
					<li className="list-group-item">
						<span className="term">Diameter</span>
						<span>{diameter}</span>
`					</li>
`				</ul>
			</div>
		</React.Fragment>
	)
};