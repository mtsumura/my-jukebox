import { connect } from "react-redux";
import { addSong } from "../actions";
import JukeButtonsComponent from "../components/jukeButtons/JukeButtonsComponent";

export default connect(null, { addSong })(JukeButtonsComponent);
