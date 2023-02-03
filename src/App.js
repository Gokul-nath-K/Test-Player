import React from "react";
import AppTopBar from "../src/components/AppTopBar";
import Player from "../src/components/Player";
import SideBar from "../src/components/sideBar";
import CurrentSongPage from "./Page/NowPlaying";

function App() {
  return (
    <>
      <div className="app-top-bar">
        <AppTopBar />
      </div>
      <div className="side-nav-bar">
        <SideBar />
      </div>
      <div className="content-container">
        <CurrentSongPage />
      </div>
      <div className="music-control-bar">
              <Player />
      </div>
    </>
  );
}

export default App;
