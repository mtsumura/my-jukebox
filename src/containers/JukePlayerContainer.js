import JukePlayer from "../components/jukePlayer/JukePlayer";
import { connect } from "react-redux";
import { removeFirstSong } from "../actions";

//directory in public where music binaries are stored
const isLocalMode = false;

const SONG_DIR = isLocalMode ? "source/" :  "songs/"
function firstIndexToSongURL(musicQueue, songList) {
	if (musicQueue.length > 0) {
		let song = musicQueue[0]
		return song.songUrl; //SONG_DIR + (isLocalMode ? song.artist + "/" + song.url : song.id);
	} else {
		return null;
	}
}

const mapStateToProps = (state) => ({
	songURL: firstIndexToSongURL(state.musicQueue),
});

export default connect(mapStateToProps, { removeFirstSong })(JukePlayer);
