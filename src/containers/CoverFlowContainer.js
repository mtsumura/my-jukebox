import { connect } from "react-redux";
import CoverFlow from "../components/coverFlow/CoverFlow";
import { fetchSongs } from "../actions"

const mapStateToProps = (state) => ({
  playLists: state.songLists.list,
  cachedLists: state.songLists.cachedLists  
  });

export default connect(mapStateToProps, { fetchSongs })(CoverFlow);
