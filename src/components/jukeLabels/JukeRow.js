import React from "react";
import JukeLabel from "./JukeLabel";
import JukeBoxButtonLabel from "./JukeBoxButtonLabel";

const JukeRow = ({ label, isLeftColumn }) => {
	let isSmall = true;
	return (
		<div className="JukeBoxRow">
			<JukeLabel
				key={label.song1.id}
				artist={label.artist}
				song1={label.song1.songTitle}
				song2={label.song2.songTitle}
				isLeftColumn={isLeftColumn}
				isSmall={isSmall}
			></JukeLabel>
			<JukeBoxButtonLabel
				labelValue1={label.song1.rowLabelValue}
				labelValue2={label.song2.rowLabelValue}
				isSmall={isSmall}
			></JukeBoxButtonLabel>
		</div>
	);
};

export default JukeRow;
