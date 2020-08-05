//import { SONG_LISTS } from "../testData/songLists.js";
import {
	START_SONGLIST_REQUEST,
	END_SONGLIST_REQUEST,
	ERROR_SONGS_REQUEST,
} from "../actions";

const songLists = (
	state = {
		isFetching: false,
		list: [],
	},
	action
) => {
	switch (action.type) {
		case START_SONGLIST_REQUEST:
			return Object.assign({}, state, { isFetching: true });
		case END_SONGLIST_REQUEST:
			return Object.assign({}, state, 
				{ 
					isFetching: false,
					list: action.songLists
			 
			 	});
		case ERROR_SONGS_REQUEST:
			return Object.assign({}, state, { isFetching: false });
		default:
			return state;
	}
};

export default songLists;