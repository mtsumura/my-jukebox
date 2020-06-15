import JukePlayer from "../components/jukePlayer/JukePlayer";
import { connect } from "react-redux";
import { removeFirstSong } from "../actions";

//directory in public where music binaries are stored
const SONG_DIR = "source/"
function firstIndexToSongURL(musicQueue, songList) {
	if (musicQueue.length > 0) {
		let song = songList[musicQueue[0].id]
		return SONG_DIR + song.artist + "/" + song.url;
	} else {
		return null;
	}
}

const mapStateToProps = (state) => ({
	songURL: firstIndexToSongURL(state.musicQueue, state.songList),
});

export default connect(mapStateToProps, { removeFirstSong })(JukePlayer);
