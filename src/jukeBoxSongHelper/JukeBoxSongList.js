//purpose of this function is to shape the song data to be consumable for presentation UI (Jukebox labels)
//and to provide a lookup map from jukebox key ("i.e. A1") to index of the song
export function createJukeBoxSongList(songList) {
  let labels = [];
  let rowLabelValueToIndex = {};
  let prevRow = null;
  rowIndex = 0;
  letterIndex = 0;

  if (songList.length > MAX_SONGS) {
    console.error("Too many songs loaded:" + songList.length + ">" + MAX_SONGS);
  }

  for (let i = 0; i < songList.length; i++) {
    let currentRow = songList[i];
    if (prevRow === null) {
      prevRow = currentRow;
    } else if (prevRow.artist === currentRow.artist) {
      let rowLabelValue1 = getNextRowLabel();
      rowLabelValueToIndex[rowLabelValue1] = i - 1;

      let rowLabelValue2 = getNextRowLabel();
      rowLabelValueToIndex[rowLabelValue2] = i;
      let label = createLabel(
        currentRow.artist,
        prevRow.songTitle,
        prevRow.id,
        rowLabelValue1,
        currentRow.songTitle,
        currentRow.id,
        rowLabelValue2
      );
      labels.push(label);

      prevRow = null;
    } else {
      let rowLabelValue1 = getNextRowLabel();
      rowLabelValueToIndex[rowLabelValue1] = i - 1;
      let label = createLabel(
        prevRow.artist,
        prevRow.songTitle,
        prevRow.id,
        rowLabelValue1,
        null,
        null,
        null
      );
      labels.push(label);

      prevRow = currentRow;
    }

    if (prevRow && i + 1 === songList.length) {
      let rowLabelValue1 = getNextRowLabel();
      rowLabelValueToIndex[rowLabelValue1] = i -1;
      let label = createLabel(
        prevRow.artist,
        prevRow.songTitle,
        prevRow.id,
        rowLabelValue1,
        null,
        null,
        null
      );
      labels.push(label);
    }
  }

  return {
    labels: labels,
    rowLableValueToIndex: rowLabelValueToIndex
  }
}

function createLabel(
  artist,
  songTitle1,
  songId1,
  rowLabelValue1,
  songTitle2,
  songId2,
  rowLabelValue2
) {
  return {
    artist: artist,
    song1: {
      songTitle: songTitle1,
      id: songId1,
      rowLabelValue: rowLabelValue1,
    },
    song2: {
      songTitle: songTitle2,
      id: songId2,
      rowLabelValue: rowLabelValue2,
    },
  };
}

export const LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "M"];
export const NUM_ROWS = 10;
const MAX_SONGS = LETTERS.length * NUM_ROWS;

let rowIndex = 0;
let letterIndex = 0;
function getNextRowLabel() {
  if (rowIndex >= NUM_ROWS) {
    letterIndex += 1;
    rowIndex = 0;
  }

  if (letterIndex > LETTERS.length) {
    console.log("ERROR: too many songs");
  }

  rowIndex += 1;
  return LETTERS[letterIndex] + rowIndex;
}
