import { connect } from "react-redux";
import JukeColumns from "../components/jukeLabels/JukeColumns";

const LABEL_SIZE = 5;
const mapStateToProps = (state, ownProps) => ({
	labelArray: ownProps.songList,
	labelSize: LABEL_SIZE,
});

export default connect(mapStateToProps)(JukeColumns);
