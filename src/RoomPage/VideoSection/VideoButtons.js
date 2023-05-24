import React, { useEffect } from "react";
import CameraButton from "./CameraButton";
import LeaveRoomButton from "./LeaveRoomButton";
import MicButton from "./MicButton";
import SwitchToScreenSharingButton from "./SwitchToScreenSharingButton";
import { connect } from "react-redux";

import socketIOClient from "socket.io-client";
const ENDPOINT = "https://server-streamumg.herokuapp.com/";
const socket = socketIOClient(ENDPOINT);

const VideoButtons = (props) => {
  const { connectOnlyWithAudio, isRoomHost, handleBannerChange } = props;

  if (!isRoomHost) {
    return null;
  }

  const handleButtonClick = (bannerNumber) => {
    handleBannerChange(bannerNumber);
    socket.emit("banner-change", {
      roomId: props.roomId,
      bannerNumber,
      currentBanner: props.currentBanner, // Utiliza 'props.currentBanner' en lugar de 'currentBanner'
    });
  };
  

  return (
    <div className="video_buttons_container">
      <MicButton />
      {!connectOnlyWithAudio && <CameraButton />}
      <LeaveRoomButton />
      {!connectOnlyWithAudio && <SwitchToScreenSharingButton />}
    
    </div>
  );
};

const mapStoreStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStoreStateToProps)(VideoButtons);
