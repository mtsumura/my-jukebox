import React from "react";
import "./JukeButtonsRow.css";
import JukeButton from "./JukeButton";

class JukeButtonsRow extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		this.props.onValueSelected(event);
	}

	render() {
		return (
			<div className="JukeButtonsRow">
				{this.props.buttonValues.map((buttonValue) => (
					<JukeButton
						key={buttonValue}
						value={buttonValue.toString()}
						onButtonClicked={this.handleClick}
						isPressed={this.props.selectedButtonValue === buttonValue}
					></JukeButton>
				))}
			</div>
		);
	}
}

export default JukeButtonsRow;
