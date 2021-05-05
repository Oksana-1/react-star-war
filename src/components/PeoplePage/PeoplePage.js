import ItemList from "../ItemList/ItemList";
import PersonDetails from "../PersonDetails/PersonDetails";
import Row from "../Row/Row";
import ErrorBoundry from "../ErrorBoundry/ErrorBoundry";
import {Component} from "react";
import StarDbAPIService from "../../api";

const apiService = new StarDbAPIService();

export default class PeoplePage extends Component {
	state = {
		selectedPersonId: null,
	}
	onPersonSelected = (selectedPersonId) => {
		this.setState({
			selectedPersonId
		})
	}
	render() {
		const {selectedPersonId } = this.state;
		const peopleList = <ItemList
			onItemSelected={this.onPersonSelected}
			getItems={apiService.getPeople}
			renderItem={({name, gender, birthYear}) => `${name} (${gender}, ${birthYear})` }
		/>;
		const personDetailed = selectedPersonId
			? <PersonDetails personId={selectedPersonId}/>
			: <p>Choose the character from the list</p>
		return (
			<ErrorBoundry>
				<Row leftElement={peopleList} rightElement={personDetailed} />
			</ErrorBoundry>
		)
	}
}