import React from "react";

const JoinRoomTitle = ({ isRoomHost }) => {
  const titleText = isRoomHost ? "Crear una reunion" : "Unirse a reunion";

  return <p className="join_room_title">{titleText}</p>;
};

export default JoinRoomTitle;
