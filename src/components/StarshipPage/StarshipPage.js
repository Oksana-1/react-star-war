import ItemList from "../ItemList/ItemList";
import {Component} from "react";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import StarDbAPIService from "../../api";

const apiService = new StarDbAPIService();

export default class StarshipPage extends Component {
	state = {
		selectedStarshipId: null,
		isError: false
	}
	onStarshipSelected = (selectedStarshipId) => {
		this.setState({
			selectedStarshipId
		})
	}
	componentDidCatch(error, errorInfo) {
		this.setState({
			isError: true
		})
	}
	render() {
		const {selectedStarshipId, isError } = this.state;
		if (isError) {
			return <ErrorIndicator />
		}
		return (
			<div className="row mb-2">
				<div className="col-md-6">
					<ItemList
						onItemSelected={this.onStarshipSelected}
						getItems={apiService.getStarships}
					/>
				</div>
				<div className="col-md-6">

				</div>
			</div>
		)
	}
}