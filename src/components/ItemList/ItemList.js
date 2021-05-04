import React, { Component } from "react";
import "./ItemList.css";
import Spinner from "../Spinner/Spinner";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";

export default class ItemList extends Component {
	state = {
		items: [],
		isLoading: true,
		isError: false
	}
	updatePeople = () => {
		this.props.getItems()
			.then(this.onDataLoaded)
			.catch(this.onError)
	}
	onDataLoaded = (items) => {
		this.setState({
			items,
			isLoading: false,
		})
	}
	onError = () => {
		this.setState({
			isError: true,
			isLoading: false,
		});
	}
	componentDidMount() {
		this.updatePeople();
	}
	renderItems(array) {
		return array.map(({ id, name }) => {
			return (
				<li
					className="list-group-item"
					key={id}
					onClick={() => this.props.onItemSelected(id)}
				>
					{ name }
				</li>
			);
		})
	}
	render() {
		const { items, isError, isLoading} = this.state;

		return (
			<ul className="item-list list-group">
				{
					isError ? <ErrorIndicator/> :
						isLoading ? <Spinner/> :
							this.renderItems(items)
				}
			</ul>
		);
	}
}