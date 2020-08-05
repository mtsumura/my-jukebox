import { combineReducers } from "redux";
import musicQueue from "./MusicQueue";
import songList from "./songList"
import songLists from "./songLists"

export default combineReducers({
	musicQueue,
	songList,
	songLists
});
