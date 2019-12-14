import { combineReducers } from "redux";

//just a javascript function.
const songsReducer = () => {
  return [
    { title: "Shawn Mendes: If I Cant Have You", duration: "4:21" },
    { title: "RITMO (Bad Boys For Life)", duration: "3:32" },
    { title: "Loco Contigo", duration: "5:02" },
    { title: "Beautiful People (feat. Khalid)", duration: "4:45" }
  ];
};

//just a javascript function.
const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

//combining the javascript functions into the Reducer (redux construct)
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
