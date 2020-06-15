import { connect } from "react-redux";
import JukePlayList from "../components/jukePlayList/JukePlayList";

function mapIndexToSong(musicQueue, songList) {
	return musicQueue.map((song) => {
		return {
			song: songList[song.id].songTitle,
			artist: songList[song.id].artist,
		};
	});
}

const mapStateToProps = (state) => ({
	songList: mapIndexToSong(state.musicQueue, state.songList),
});

export default connect(mapStateToProps)(JukePlayList);
