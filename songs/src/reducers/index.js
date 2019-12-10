import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Shawn Mendes: If I Cant Have You", duration: "4:21" },
    { title: "RITMO (Bad Boys For Life)", duration: "3:32" },
    { title: "Loco Contigo", duration: "5:02" },
    { title: "Beautiful People (feat. Khalid)", duration: "4:45" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
