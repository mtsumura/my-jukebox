import React from "react";
import PropTypes from "prop-types";
import JukeButtonsRow from "./JukeButtonsRow";

class JukeButtonsComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedLetter: null,
			selectedNumber: null,
		};
		this.handleLetterClick = this.handleLetterClick.bind(this);
		this.handleNumberClick = this.handleNumberClick.bind(this);
	}

	handleLetterClick(event) {
		this.setState((state, props) => ({
			selectedLetter: event.value,
		}));
		this.addSongSelection(event.value, this.state.selectedNumber);
	}

	handleNumberClick(event) {
		this.setState((state, props) => ({
			selectedNumber: event.value,
		}));
		this.addSongSelection(this.state.selectedLetter, event.value);
	}

	addSongSelection(selectedLetter, selectedNumber) {
		if (selectedLetter && selectedNumber) {
			let key = selectedLetter + selectedNumber;
			let songIndex = this.props.rowLableValueToIndex[key];
			if (songIndex >= 0) {
				this.props.addSongToQueue(songIndex);
			}

			this.setState((state) => ({
				selectedLetter: null,
				selectedNumber: null,
			}));
		}
	}

	render() {
		return (
			<div className="JukeBoxButtons">
				<JukeButtonsRow
					buttonValues={this.props.letters}
					onValueSelected={this.handleLetterClick}
					selectedButtonValue={this.state.selectedLetter}
				></JukeButtonsRow>
				<JukeButtonsRow
					buttonValues={[...Array(this.props.numRows).keys()].map((x) => ++x)}
					onValueSelected={this.handleNumberClick}
					selectedButtonValue={this.state.selectedNumber}
				></JukeButtonsRow>
			</div>
		);
	}
}

JukeButtonsComponent.propTypes = {
	letters: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
	addSongToQueue: PropTypes.func.isRequired,
	numRows: PropTypes.number.isRequired,
	rowLableValueToIndex: PropTypes.object.isRequired
};

export default JukeButtonsComponent;
