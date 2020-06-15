import React from "react";
import PropTypes from "prop-types";
import JukePlayListItem from "./JukePlayListItem";
import "./JukePlayList.css";
import JukePlayerContainer from "../../containers/JukePlayerContainer";

let index = 0;
const JukePlayList = ({ songList }) => (
  <div className="JukePlayList">
    <JukePlayerContainer />
    <ul className="JukePlayList__list">
      {songList.map((item) => (
        <JukePlayListItem key={item.song + ++index} item={item} />
      ))}
    </ul>
  </div>
);

JukePlayList.propTypes = {
  songList: PropTypes.arrayOf(
    PropTypes.shape({
      song: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default JukePlayList;
