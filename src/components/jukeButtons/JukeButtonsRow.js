import React from "react";
import "./JukeButtonsRow.css";
import JukeButton from "./JukeButton";

class JukeButtonsRow extends React.Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(event) {
		if(event.value == "Add All")
			this.props.onAddAllSelected();
		else
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
				{this.props.onAddAllSelected &&
						<JukeButton
							key={"Add All"}
							value={"Add All"}
							onButtonClicked={this.handleClick}
							isPressed={false}
							isLarge={true}
						></JukeButton>
				}
			</div>
		);
	}
}

export default JukeButtonsRow;
