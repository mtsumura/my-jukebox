import React from "react";
import "./JukePlayer.css";

class JukePlayer extends React.Component {
	constructor(props) {
		super(props);

		this.onSongEnded = this.onSongEnded.bind(this);
	}

	onSongEnded() {
		this.props.removeFirstSong();
	}

	componentDidUpdate() {
		var audio = document.getElementById("audioPlayer");
		audio.load();
		audio.play();
	}

	render() {
		return (
			<audio id="audioPlayer" className="JukePlayer" onEnded={this.onSongEnded} controls>
				<source src={this.props.songURL} type="audio/mpeg"></source>
				<source rc={this.props.songURL} type="audio/mp4" />
				source not supported??
			</audio>
		);
	}
}

export default JukePlayer;
