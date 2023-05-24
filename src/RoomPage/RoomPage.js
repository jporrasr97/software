import React, { useEffect, useState } from "react";
import ChatSection from "./ChatSection/ChatSection";
import ParticipantsSection from "./ParticipantsSection/ParticipantsSection";
import VideoSection from "./VideoSection/VideoSection";
import RoomLabel from "./RoomLabel";
import { connect } from "react-redux";
import * as webRTCHandler from "../utils/webRTCHandler";
import Overlay from "./Overlay";
import { setCurrentBanner } from "../store/actions";

import "./RoomPage.css";
import banner1 from "../resources/images/banner1.gif";
import banner2 from "../resources/images/banner2.png";
import banner3 from "../resources/images/banner3.png";

import socketIOClient from "socket.io-client";
const ENDPOINT = "https://server-streamumg.herokuapp.com/"; // Cambia esto a tu dirección de servidor
const socket = socketIOClient(ENDPOINT);

const RoomPage = ({
  roomId,
  identity,
  isRoomHost,
  showOverlay,
  connectOnlyWithAudio,
  dispatch,

}) => {
  const [currentBanner, setCurrentBanner] = useState(banner1);

  useEffect(() => {
    if (!isRoomHost && !roomId) {
      const siteUrl = window.location.origin;
      window.location.href = siteUrl;
    } else {
      webRTCHandler.getLocalPreviewAndInitRoomConnection(
        isRoomHost,
        identity,
        roomId,
        connectOnlyWithAudio
      );
    }

    const handleBannerChangeEvent = (data) => {
      console.log("Received banner change event:", data);
      dispatch(setCurrentBanner(data.currentBanner));
    };
  
    console.log("Subscribing to banner-change event");
    socket.on("banner-change", handleBannerChangeEvent);
  
    return () => {
      console.log("Unsubscribing from banner-change event");
      socket.off("banner-change", handleBannerChangeEvent);
    };
  }, []);

  const handleBannerChange = (bannerNumber) => {
    console.log("Handling banner change:", bannerNumber);
    switch (bannerNumber) {
      case 1:
        setCurrentBanner(banner1);
        break;
      case 2:
        setCurrentBanner(banner2);
        break;
      case 3:
        setCurrentBanner(banner3);
        break;
      default:
        setCurrentBanner(banner1);
    }

    // Emitir evento de cambio de banner a través de Socket.IO
    socket.emit("banner-change", { roomId, bannerNumber });
  };

  return (
    <div className="room_container">
      <img src={currentBanner} className="room_page_banner" />
      <ParticipantsSection />
      <VideoSection isRoomHost={isRoomHost} handleBannerChange={handleBannerChange} currentBanner={currentBanner} />

      <ChatSection />
      <RoomLabel roomId={roomId} />
      {showOverlay && <Overlay />}
    </div>
  );
};

const mapStoreStateToProps = (state) => {
  return {
    ...state,
  };
};

export default connect(mapStoreStateToProps)(RoomPage);
