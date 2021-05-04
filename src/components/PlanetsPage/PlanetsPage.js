import React, {Component} from "react";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import ItemList from "../ItemList/ItemList";
import StarDbAPIService from "../../api";

const apiService = new StarDbAPIService();

export default class PlanetsPage extends Component{
	state = {
		selectedPlanetId: null,
		isError: false
	}
	onPlanetSelected = (selectedPlanetId) => {
		this.setState({
			selectedPlanetId
		})
	}
	componentDidCatch(error, errorInfo) {
		this.setState({
			isError: true
		})
	}
	render() {
		const {selectedPlanetId, isError } = this.state;
		if (isError) {
			return <ErrorIndicator />
		}
		return (
			<div className="row mb-2">
				<div className="col-md-6">
					<ItemList
						onItemSelected={this.onPlanetSelected}
						getItems={apiService.getPlanets}
					/>
				</div>
			</div>
		)
	}
}
