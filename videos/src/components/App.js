import React from "react";
import SearchBar from "./SearchBar";
import YouTube from "../apis/YouTube";

class App extends React.Component {
  state = { videos: [] };

  onTermSubmit = async term => {
    console.log(term);
    const response = await YouTube.get("/search", {
      params: {
        q: term
      }
    });
    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit}></SearchBar>I have{" "}
        {this.state.videos.length} videos.
      </div>
    );
  }
}

export default App;
