import React, { Component } from "react";
import Spinner from "../Spinner/Spinner";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import ItemView from "../ItemView/ItemView";
import "./ItemDetails.css";

export default class ItemDetails extends Component {
	state = {
		item: {},
		isLoading: false,
		isError: false
	}
	updateItem() {
		const {itemId} = this.props;
		if (!itemId) return;
		this.setState({
			isLoading: true,
		});
		this.props.getItemById(itemId)
		.then(this.onDataLoaded)
		.catch(this.onError)
	}
	onDataLoaded = (item) => {
		this.setState({
			item,
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
		this.updateItem();
	}

	componentDidUpdate(prevProps) {
		if (this.props.itemId === prevProps.itemId) return;
		this.updateItem();
	}

	render() {
		const { item, isLoading, isError } = this.state;
		return (
			<div className="person-details card">
			{
				isError ? <ErrorIndicator/> :
					isLoading ? <Spinner/> :
						<ItemView
							item={item}
							getImageUrl={this.props.getImageUrl}
						/>
			}
			</div>
		)
	}
}