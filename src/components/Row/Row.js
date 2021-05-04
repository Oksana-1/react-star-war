import React from "react";

const Row = ({leftElement, rightElement}) => {
	return (
		<div className="row mb-2">
			<div className="col-md-6">
				{leftElement}
			</div>
			<div className="col-md-6">
				{rightElement}
			</div>
		</div>
	);
}
export default Row;