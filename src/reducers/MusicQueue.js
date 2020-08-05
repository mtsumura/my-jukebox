import {ADD_SONG, REMOVE_FIRST_SONG} from '../actions'

const musicQueue = (state = [], action) => {
	switch (action.type) {
		case ADD_SONG:
			return [
				...state,
				{
					type: action.type,
					songUrl: action.songUrl,
					songTitle: action.songTitle,
					artist: action.artist
				},
			];
		case REMOVE_FIRST_SONG:
			return (state.length > 0 ? state.slice(1) : state);
		default:
			return state;
	}
};

export default musicQueue;
