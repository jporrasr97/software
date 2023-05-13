import React from "react";
import { connect } from "react-redux";
import "./VideoGrid.css";
import banner from "../../resources/images/banner.png";

const VideoGrid = ({ videoStreams }) => {
  return (
    <div id="videos_portal" className="videos_portal">
      {videoStreams.map((streamData, index) => {
        const { stream, socketId, onlyAudio, identity } = streamData;

        return (
          socketId && ( // Agrega esta línea para verificar si socketId está definido
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
              {index === 0 && (
                <div className="banner_container">
                  <img src={banner} alt="Banner" className="banner_image" />
                </div>
              )}
            </div>
          ) // Cierra la expresión condicional aquí
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    videoStreams: state.videoStreams,
  };
};

export default connect(mapStateToProps)(VideoGrid);
