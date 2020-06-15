const fs = require('fs');
console.log('Script Started');
var sourceDir = fs.readdirSync('../public/source');

var songList =[];
var id = 0;
sourceDir.forEach(dirName => {
	console.log("dir:" + dirName);
	var files = fs.readdirSync('../public/source' + '/' + dirName)
	files.forEach(fileName => {
		console.log("File:" + fileName);
		let cleanedSongName = fileName.slice(0, -4);
		cleanedSongName = cleanedSongName.replace(/[0-9]|-/g, '').trim();

		let song = {
			id: id++,
			artist: dirName,
			songTitle: cleanedSongName,
			url: fileName
		}
		songList.push(song);
	});
});

songList.forEach(song => console.log(song.id + ":" + song.artist + "-" + song.songName + "-" + song.url));

fs.writeFile ("songs.json", JSON.stringify(songList), function(err) {
    if (err) throw err;
    console.log('complete');
    }
);