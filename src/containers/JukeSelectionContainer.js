import React from "react";
import { connect } from "react-redux";
import { LETTERS, NUM_ROWS, createJukeBoxSongList } from "../jukeBoxSongHelper/JukeBoxSongList";
import JukeButtonsContainer from "./JukeButtonsContainer";
import JukeColumnContainer from "./JukeColumnContainer";
import "./JukeSelectionContainer.css";

function JukeSelectionContainer({ labelArray, rowLableValueToIndex }) {
  return (
    <div className="JukeSelectionContainer">
      <JukeColumnContainer songList={labelArray} />
      <JukeButtonsContainer
        letters={LETTERS}
        numRows={NUM_ROWS}
        rowLableValueToIndex={rowLableValueToIndex}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  let songListMetadata = createJukeBoxSongList(state.songList);
  return {
    labelArray: songListMetadata.labels,
    rowLableValueToIndex: songListMetadata.rowLableValueToIndex,
  };
};

export default connect(mapStateToProps)(JukeSelectionContainer);
