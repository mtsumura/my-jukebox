import React from "react";
import "./JukeLabel.css";

const JukeBoxLabel = ({ artist, song1, song2, isSmall }) => {
	const SMALL_SIZE = "__smallSize";
	const labelClassValue = "JukeBoxLabel";
	let labelClass = labelClassValue;
	labelClass += isSmall ? " " + labelClassValue + SMALL_SIZE : "";

	const containerClassValue = "JukeBoxLabel__JukeBoxSongNameContainer";
	let containerClass = containerClassValue;
	containerClass += isSmall ? " " + containerClassValue + SMALL_SIZE : "";

	const songNameClassValue = "JukeBoxLabel__JukeBoxSongName";
	let songNameClass = songNameClassValue;
	songNameClass += isSmall ? " " + songNameClassValue + SMALL_SIZE : "";

	const artistNameClassValue = "JukeBoxLabel__JukeBoxArtistName";
	let artistNameClass = artistNameClassValue;
	artistNameClass += isSmall ? " " + artistNameClassValue + SMALL_SIZE : "";

	return (
		<div className={labelClass}>
			<div className={containerClass}>
				<div className={songNameClass + " JukeBoxSongNameTop"}>'{song1}'</div>
			</div>
			<div className={artistNameClass}> {artist} </div>
			<div className={containerClass}>
				<div className={songNameClass + " JukeBoxSongNameBottom"}>
					{song2 === null ? "" : "'" + song2 + "'"}
				</div>
			</div>
		</div>
	);
};

export default JukeBoxLabel;
