import { connect } from "react-redux";
import { addSongToQueue } from "../actions";
import JukeButtonsComponent from "../components/jukeButtons/JukeButtonsComponent";

const mapStateToProps = (state) => ({
	songs: state.songList.songs
});

export default connect(mapStateToProps, { addSongToQueue })(JukeButtonsComponent);
