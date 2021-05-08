import ItemList from "../ItemList/ItemList";
import ItemDetails from "../ItemDetails/ItemDetails";
import Row from "../Row/Row";
import ErrorBoundry from "../ErrorBoundry/ErrorBoundry";
import { Component } from "react";

export default class ItemPage extends Component {
	state = {
		selectedItemId: null,
	}
	onItemSelected = (selectedItemId) => {
		this.setState({
			selectedItemId
		})
	}
	render() {
		const { selectedItemId } = this.state;
		const {getData, getItemById, getImageUrl} = this.props;
		const itemList = <ItemList
			onItemSelected={this.onItemSelected}
			getItems={getData}
			renderItem={({name, gender, birthYear}) => `${name} (${gender}, ${birthYear})` }
		/>;
		const itemDetailed = selectedItemId
			? <ItemDetails
				itemId={selectedItemId}
				getItemById={getItemById}
				getImageUrl={getImageUrl}
			/>
			: <p>Choose the character from the list</p>
		return (
			<ErrorBoundry>
				<Row leftElement={itemList} rightElement={itemDetailed} />
			</ErrorBoundry>
		)
	}
}