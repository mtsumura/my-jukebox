import { SONG_LIST } from "../testData/rockSongs.js";
import {
	START_SONGS_REQUEST,
	POPULATE_SONG_LIST,
	END_SONGS_REQUEST,
	ERROR_SONGS_REQUEST,
} from "../actions";

const songList = (
	state = {
		isFetching: false,
		songs: [],
	},
	action
) => {
	switch (action.type) {
		case START_SONGS_REQUEST:
			return Object.assign({}, state, { isFetching: true });
		case END_SONGS_REQUEST:
			return Object.assign({}, state, 
				{ 
					isFetching: false,
					songs: action.songs
			 
			 	});
		case ERROR_SONGS_REQUEST:
			return Object.assign({}, state, { isFetching: false });
		case POPULATE_SONG_LIST:
			return Object.assign({}, state, {
				songs: action.songs,
			});
		default:
			return state;
	}
};

export default songList;