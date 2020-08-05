import { connect } from "react-redux";
import JukePlayList from "../components/jukePlayList/JukePlayList";

function mapIndexToSong(musicQueue) {
	return musicQueue.map((song) => {
		return {
			song: song.songTitle,
			artist: song.artist,
			songUrl: song.songUrl
		};
	});
}

const mapStateToProps = (state) => ({
	songList: mapIndexToSong(state.musicQueue),
});

export default connect(mapStateToProps)(JukePlayList);
