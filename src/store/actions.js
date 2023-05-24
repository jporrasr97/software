export const SET_IS_ROOM_HOST = "SET_IS_ROOM_HOST";
export const SET_CONNECT_ONLY_WITH_AUDIO = "SET_CONNECT_ONLY_WITH_AUDIO";
export const SET_IDENTITY = "SET_IDENTITY";
export const SET_ROOM_ID = "SET_ROOM_ID";
export const SET_SHOW_OVERLAY = "SET_SHOW_OVERLAY";
export const SET_PARTICIPANTS = "SET_PARTICIPANTS";
export const SET_MESSAGES = "SET_MESSAGES";
export const SET_ACTIVE_CONVERSATION = 'SET_ACTIVE_CONVERSATION';
export const SET_DIRECT_CHAT_HISTORY = 'SET_DIRECT_CHAT_HISTORY';
export const SET_SOCKET_ID = 'SET_SOCKET_ID';
export const ADD_VIDEO_STREAM = "ADD_VIDEO_STREAM";
export const SET_CURRENT_BANNER = "SET_CURRENT_BANNER";

export const setIsRoomHost = (isRoomHost) => {
  return {
    type: SET_IS_ROOM_HOST,
    isRoomHost,
  };
};

export const setConnectOnlyWithAudio = (onlyWithAudio) => {
  return {
    type: SET_CONNECT_ONLY_WITH_AUDIO,
    onlyWithAudio,
  };
};

export const setIdentity = (identity) => {
  return {
    type: SET_IDENTITY,
    identity,
  };
};

export const setRoomId = (roomId) => {
  return {
    type: SET_ROOM_ID,
    roomId,
  };
};

export const setShowOverlay = (showOverlay) => {
  return {
    type: SET_SHOW_OVERLAY,
    showOverlay,
  };
};

export const setParticipants = (participants) => {
  return {
    type: SET_PARTICIPANTS,
    participants,
  };
};

export const setMessages = (messages) => {
  return {
    type: SET_MESSAGES,
    messages,
  };
};

export const setActiveConversation = (activeConversation) => {
  return {
    type: SET_ACTIVE_CONVERSATION,
    activeConversation
  }
}

export const setDirectChatHistory = (directChatHistory) => {
  return {
    type: SET_DIRECT_CHAT_HISTORY,
    directChatHistory
  }
}

export const setSocketId = (socketId) => {
  return {
    type: SET_SOCKET_ID,
    socketId
  }
}



export const addVideoStream = (streamData) => {
  return {
    type: ADD_VIDEO_STREAM,
    payload: streamData,
  };
};



export const setCurrentBanner = (currentBanner) => {
  return {
    type: SET_CURRENT_BANNER,
    currentBanner,
  };
};

