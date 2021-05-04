import React, { Component } from "react";
import Spinner from "../Spinner/Spinner";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import PersonView from "../PersonView/PersonView";
import StarDbAPIService from "../../api";
import "./PersonDetails.css";
const apiService = new StarDbAPIService();

export default class PersonDetails extends Component {
	state = {
		person: {},
		isLoading: false,
		isError: false
	}
	updatePerson() {
		const {personId} = this.props;
		if (!personId) return;
		this.setState({
			isLoading: true,
		});
		apiService.getPersonById(personId)
		.then(this.onDataLoaded)
		.catch(this.onError)
	}
	onDataLoaded = (person) => {
		this.setState({
			person,
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
		this.updatePerson();
	}

	componentDidUpdate(prevProps) {
		if (this.props.personId === prevProps.personId) return;
		this.updatePerson();
	}

	render() {
		const { person, isLoading, isError } = this.state;
		return (
			<div className="person-details card">
			{
				isError ? <ErrorIndicator/> :
					isLoading ? <Spinner/> :
						<PersonView person={person}/>
			}
			</div>
		)
	}
}