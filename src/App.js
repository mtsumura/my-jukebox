import React from "react";
import JukePlayListContainer from "./containers/JukePlayListContainer";
import JukeSelectionContainer from "./containers/JukeSelectionContainer";
import CoverFlowContainer from "./containers/CoverFlowContainer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {/*}<div className="JukeBoxHeader" />{*/}
          <CoverFlowContainer></CoverFlowContainer>
          <div className="JukeDisplayContainer">
            <JukeSelectionContainer />
            <div className="JukePlayContainer">
              <JukePlayListContainer />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
