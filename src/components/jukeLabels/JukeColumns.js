import React from "react";
import JukeColumn from "./JukeColumn";
import "./JukeBoxColumns.css";

const JukeColumns = ({ labelSize, labelArray }) => {
  let numColumns = labelArray.length / labelSize;
  let isEven = function (index) {
    return index % 2 === 0;
  };

  let columns = [], i;
  for (i = 0; i < numColumns; i++) {
    let column = (
      <JukeColumn
        key={i}
        labels={labelArray.slice(i * labelSize, labelSize + labelSize * i)}
        isLeftColumn={!isEven(i)}
        needsSplitter={!isEven(i)}
      ></JukeColumn>
    );
    columns.push(column);
  }

  return <div className="JukeBoxColumns">{columns}</div>;
};

export default JukeColumns;
