import { connect } from "react-redux";
import { addSongToQueue } from "../actions";
import JukeButtonsComponent from "../components/jukeButtons/JukeButtonsComponent";

export default connect(null, { addSongToQueue })(JukeButtonsComponent);
