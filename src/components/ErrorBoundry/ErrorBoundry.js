import React, {Component} from "react";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";

export default class ErrorBoundry extends Component {
	state = {
		isError: false
	}
	componentDidCatch(error, errorInfo) {
		this.setState({
			isError: true
		})
	}
	render() {
		if (this.state.isError) {
			return <ErrorIndicator />
		}
		return this.props.children;
	}
}