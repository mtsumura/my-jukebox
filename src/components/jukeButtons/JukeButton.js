import React from "react";
import PropTypes from "prop-types";
import "./JukeButton.css";

const JukeButton = ({ value, onButtonClicked, isPressed }) => {
	let selectedClass = "jukeButton";
	selectedClass += isPressed ? " buttonSelected" : "";

	return (
		<button className={selectedClass} onClick={() => onButtonClicked({ value })}>
			{value}
		</button>
	);
};

JukeButton.propTypes = {
	value: PropTypes.string.isRequired,
	onButtonClicked: PropTypes.func.isRequired,
	isPressed: PropTypes.bool.isRequired,
};

export default JukeButton;
