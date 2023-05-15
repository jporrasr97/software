import React from 'react';
import VideoButtons from './VideoButtons';
import VideoGrid from './VideoGrid';

const VideoSection = (props) => {
  const { isRoomHost } = props;

  return (
    <div className="video_section_container">
      <VideoGrid />
      <VideoButtons isRoomHost={isRoomHost} />
    </div>
  );
};

export default VideoSection;
