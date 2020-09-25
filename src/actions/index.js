import fetch from "cross-fetch";
import { SONG_LIST } from "../testData/rockSongs.js";
import { SONG_LISTS } from "../testData/songLists.js"

export const ADD_SONG = "ADD_SONG";
export const REMOVE_FIRST_SONG = "REMOVE_FIRST_SONG";

export const START_SONGS_REQUEST = "START_SONGS_REQUEST";
export const END_SONGS_REQUEST = "END_SONGS_REQUEST";
export const ERROR_SONGS_REQUEST = "ERROR_SONGS_REQUEST";
export const POPULATE_SONG_LIST = "POPULATE_SONG_LIST";

export const START_SONGLIST_REQUEST = "START_SONGLIST_REQUEST";
export const END_SONGLIST_REQUEST = "END_SONGLIST_REQUEST";

export const addSong = (songTitle, artist, url) => ({
	type: ADD_SONG,
	songUrl: url,
	songTitle: songTitle,
	artist: artist
});

export const removeFirstSong = () => ({
	type: REMOVE_FIRST_SONG,
});

export const populateSongList = (songList) => ({
	type: POPULATE_SONG_LIST,
	songs: songList,
});

//asynch requests
export const startSongsRequest = (id) => ({
	type: START_SONGS_REQUEST,
	listId: id
});

export const endSongsRequest = (json) => ({
	type: END_SONGS_REQUEST,
	songs: json,
});

export const errorSongsRequest = (errorMsg) => ({
	type: ERROR_SONGS_REQUEST,
	errorMsg: errorMsg,
});

export const startSongListRequest = () => ({
	type: START_SONGLIST_REQUEST,
});

export const endSongListRequest = (json) => ({
	type: END_SONGLIST_REQUEST,
	songLists: json,
});

const isLocalMode = true;
const SONG_DIR = isLocalMode ? "source/" : "songs/";

const createSongUrl = (id, songList) => {
	const song = songList[id];
	console.log(song.url + song.artist + song.id)
	let url = SONG_DIR + (isLocalMode ? song.artist + "/" + song.url : song.id);
	return url;
};

export function addSongToQueue(id) {
  return (dispatch, getState) => {
    const { songList } = getState();
    let songs = songList.songs;
    let url = createSongUrl(id, songs)
    dispatch(addSong(songs[id].songTitle, songs[id].artist, url));
  };
}

export function fetchSongs(id) {
	return function (dispatch) {
		if(isLocalMode) {
			dispatch(endSongsRequest(SONG_LIST));	
		}
		else {
			console.log("fetch songs for " + id)
			dispatch(startSongsRequest(id));

			//fetch(`http://localhost/songs/`)
			fetch(`http://localhost/lists/${id}`)
				.then(
					(response) => response.json()
					// Do not use catch, because errors occured during rendering
					// should be handled by React Error Boundaries
					// https://reactjs.org/docs/error-boundaries.html
				)
				.then((json) => {
					dispatch(endSongsRequest(json))
				})
				.catch((error) => {
					console.error(error);
					dispatch(errorSongsRequest());
				});
		}
	};
}

export function fetchSongLists() {
	return function (dispatch) {
		if(isLocalMode) {
			fetchSongList(dispatch, SONG_LISTS)
		}
		else {
			dispatch(startSongListRequest());

			//fetch(`http://localhost/songs/`)
			fetch(`http://localhost/lists`)
				.then(
					(response) => response.json()
					// Do not use catch, because errors occured during rendering
					// should be handled by React Error Boundaries
					// https://reactjs.org/docs/error-boundaries.html
				)
				.then((jsonList) => {
					fetchSongList(dispatch, jsonList);					
				});
		}
	};
}

function fetchSongList(dispatch, jsonList) {
	dispatch(endSongListRequest(jsonList))
	if(jsonList && jsonList.length > 0) {
		let firstSongList = jsonList[0];
		let fetchSongsFunc = fetchSongs(firstSongList.id);
		fetchSongsFunc(dispatch);
	}
}
