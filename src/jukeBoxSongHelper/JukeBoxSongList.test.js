import { createJukeBoxSongList } from "./JukeBoxSongList";
import { SONG_LIST1, SONG_LIST2, SONG_LIST3 } from "../testData/Songs";

describe("JukeBoxSongList createJukeBoxSongList", () => {
  it("should transform data model to presentation model", () => {
    expect(createJukeBoxSongList(SONG_LIST1).labels.length).toEqual(1);
  });

  it("should handle uneven number of songs", () => {
    expect(createJukeBoxSongList(SONG_LIST2).labels.length).toEqual(3);
  });
  it("should group songs from different artists", () => {
    expect(createJukeBoxSongList(SONG_LIST3).labels.length).toEqual(4);
  });

  it("should create proper row labels for each song", () => {
    let songList = createJukeBoxSongList(SONG_LIST1);
    let row = songList.labels[0]
    expect(row.song1.rowLabelValue).toEqual("A1");
    expect(row.song2.rowLabelValue).toEqual("A2");
  });  
});
