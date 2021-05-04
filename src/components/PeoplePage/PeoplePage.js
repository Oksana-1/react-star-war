import ItemList from "../ItemList/ItemList";
import PersonDetails from "../PersonDetails/PersonDetails";
import {Component} from "react";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import StarDbAPIService from "../../api";

const apiService = new StarDbAPIService();

export default class PeoplePage extends Component {
	state = {
		selectedPersonId: null,
		isError: false
	}
	onPersonSelected = (selectedPersonId) => {
		this.setState({
			selectedPersonId
		})
	}
	componentDidCatch(error, errorInfo) {
		this.setState({
			isError: true
		})
	}
	render() {
		const {selectedPersonId, isError } = this.state;
		if (isError) {
			return <ErrorIndicator />
		}
		return (
			<div className="row mb-2">
				<div className="col-md-6">
					<ItemList
						onItemSelected={this.onPersonSelected}
						getItems={apiService.getPeople}
						renderItem={({name, gender, birthYear}) => `${name} (${gender}, ${birthYear})` }
					/>
				</div>
				<div className="col-md-6">
					{
						selectedPersonId
							? ( <PersonDetails personId={selectedPersonId}/> )
							: (<p>Choose the character from the list</p>)
					}
				</div>
			</div>
		)
	}
}