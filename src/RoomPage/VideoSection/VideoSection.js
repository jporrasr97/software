import React from "react";
import VideoButtons from "./VideoButtons";
import VideoGrid from "./VideoGrid";

const VideoSection = () => {
  return (
    <div className="video_section_container">
      <VideoGrid />
      <VideoButtons />
    </div>
  );
};

export default VideoSection;
