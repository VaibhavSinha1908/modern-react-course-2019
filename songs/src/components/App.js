import React from "react";
import { selectSong } from "../actions";
import SongsList from "../components/SongsList";
import SongDetail from "./SongDetail";

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongsList></SongsList>
        </div>
        <div className="column eight wide">
          <SongDetail></SongDetail>
        </div>
      </div>
    </div>
  );
};

export default App;
