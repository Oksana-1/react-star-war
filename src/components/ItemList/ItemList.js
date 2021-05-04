import React, { Component } from "react";
import StarDbAPIService from "../../api";
import "./ItemList.css";
import Spinner from "../Spinner/Spinner";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";

const apiService = new StarDbAPIService();

export default class ItemList extends Component {
	state = {
		people: [],
		isLoading: true,
		isError: false
	}
	updatePeople() {
		apiService.getPeople()
			.then(this.onDataLoaded)
			.catch(this.onError)
	}
	onDataLoaded = (people) => {
		console.log(people);
		this.setState({
			people,
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
		const { people, isError, isLoading} = this.state;

		return (
			<ul className="item-list list-group">
				{
					isError ? <ErrorIndicator/> :
						isLoading ? <Spinner/> :
							this.renderItems(people)
				}
			</ul>
		);
	}
}