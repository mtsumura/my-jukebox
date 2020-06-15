import { combineReducers } from "redux";
import musicQueue from "./MusicQueue";
import songList from "./songList"

export default combineReducers({
	musicQueue,
	songList
});
