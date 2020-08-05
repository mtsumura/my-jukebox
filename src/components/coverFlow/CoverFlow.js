import React from "react";
import Coverflow from "react-coverflow";
import "./CoverFlow.css";

let IMAGE_DIR = "images/";
class CoverFlow extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.props.fetchSongs(id);
  }

  onError(ev) {
    ev.target.parentNode.classList.add("defaultCover");
  }

  render() {
    return (
      <div className="coverflow_container">
        <Coverflow
          width={960}
          height={300}
          displayQuantityOfSide={2}
          navigation={false}
          enableHeading={false}
          active={0}
          children={this.props.playLists.map((playList) => (
            <div onClick={() => this.handleClick(playList.id)}>
              <img
                key={"key" + playList.id}
                src={IMAGE_DIR + playList.url}
                alt={playList.name}
                title={playList.name}
                onError={this.onError}
              />
            </div>
          ))}
        ></Coverflow>
      </div>
    );
  }
}

export default CoverFlow;
