import React from "react";
import VideoButtons from "./VideoButtons";
import VideoGrid from "./VideoGrid";

const VideoSection = ({ isRoomHost, handleBannerChange, currentBanner }) => {
  return (
    <div className="video_section_container">
      <VideoGrid currentBanner={currentBanner} />
      <VideoButtons isRoomHost={isRoomHost} handleBannerChange={handleBannerChange} />
    </div>
  );
};

export default VideoSection;
