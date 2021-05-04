import ItemList from "../ItemList/ItemList";
import PersonDetails from "../PersonDetails/PersonDetails";
import Row from "../Row/Row";
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
		const peopleList = <ItemList
			onItemSelected={this.onPersonSelected}
			getItems={apiService.getPeople}
			renderItem={({name, gender, birthYear}) => `${name} (${gender}, ${birthYear})` }
		/>;
		const personDetailed = selectedPersonId
			? <PersonDetails personId={selectedPersonId}/>
			: <p>Choose the character from the list</p>
		return (
			<Row leftElement={peopleList} rightElement={personDetailed} />
		)
	}
}