import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map(e => {
    return (
      <VideoItem
        key={e.id.videoId}
        onVideoSelect={onVideoSelect}
        video={e}
      ></VideoItem>
    );
  });
  return <div className="ui relaxes divided list">{renderedList}</div>;
};

export default VideoList;
