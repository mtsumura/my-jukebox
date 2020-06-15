import React from "react";
import JukeRow from "./JukeRow";
import "./JukeColumn.css";

const JukeColumn = ({ labels, isLeftColumn, needsSplitter }) => {
	let classValue = isLeftColumn
		? "JukeBoxColumn JukeBoxColumnLeft"
		: "JukeBoxColumn JukeBoxColumnRight";
	classValue += needsSplitter ? " JukeBoxColumnSplitter" : "";
	return (
		<div className={classValue}>
			{labels.map((label) => (
				<JukeRow key={label.song1.id} label={label}></JukeRow>
			))}
		</div>
	);
};

export default JukeColumn;
