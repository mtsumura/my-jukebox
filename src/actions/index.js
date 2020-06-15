export const ADD_SONG = "ADD_SONG"
export const REMOVE_FIRST_SONG = "REMOVE_FIRST_SONG"

export const addSong = id => ({
	type: ADD_SONG,
	songId: id	
})

export const removeFirstSong = () => ({
	type: REMOVE_FIRST_SONG
})