import React from "react";
import { connect } from "react-redux";
import "./VideoGrid.css";

const VideoGrid = ({ videoStreams, currentBanner }) => {
  return (
    <div id="videos_portal" className="videos_portal">
      {videoStreams.map((streamData, index) => {
        const { stream, socketId, onlyAudio, identity } = streamData;

        return (
          socketId && (
            <div key={socketId} className="video_track_container">
              <video
                id={`${socketId}-video`}
                autoPlay
                srcObject={stream}
                onClick={(e) => {
                  e.target.classList.toggle("full_screen");
                }}
              ></video>
              {onlyAudio && (
                <div className="label_only_audio_container">
                  <p className="label_only_audio_text">{`Only audio ${identity}`}</p>
                </div>
              )}
              {currentBanner && (
                <div className="banner_container">
                  <img src={currentBanner} alt="Banner" className="banner_image" />
                </div>
              )}
            </div>
          )
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    videoStreams: state.videoStreams,
    currentBanner: state.currentBanner, // Conecta currentBanner al estado global
  };
};


export default connect(mapStateToProps)(VideoGrid);
