
import {
  SET_ROOM_ID,
  SET_IDENTITY,
  ADD_VIDEO_STREAM,
  SET_IS_ROOM_HOST,
  SET_CONNECT_ONLY_WITH_AUDIO,
  SET_SHOW_OVERLAY,
  SET_PARTICIPANTS,
  SET_MESSAGES,
  SET_ACTIVE_CONVERSATION,
  SET_DIRECT_CHAT_HISTORY,
  SET_CURRENT_BANNER,
  SET_SOCKET_ID,
  
} from "./actions";
const initState = {
  identity: "",
  isRoomHost: false,
  connectOnlyWithAudio: false,
  roomId: null,
  showOverlay: true,
  participants: [],
  messages: [],
  activeConversation: null,
  directChatHistory: [],
  addVideoStream: [],
  socketId: null,
  currentBanner: null,
  videoStreams: [], // Add videoStreams to the initial state
};


const reducer = (state = initState, action) => {
  switch (action.type) {
    case SET_IS_ROOM_HOST:
      return {
        ...state,
        isRoomHost: action.isRoomHost,
      };
    case SET_CURRENT_BANNER:
      return {
        ...state,
        currentBanner: action.currentBanner,
      };
    case SET_CONNECT_ONLY_WITH_AUDIO:
      return {
        ...state,
        connectOnlyWithAudio: action.onlyWithAudio,
      };
    case SET_ROOM_ID:
      return {
        ...state,
        roomId: action.roomId,
      };
    case SET_IDENTITY:
      return {
        ...state,
        identity: action.identity,
      };
    case SET_SHOW_OVERLAY:
      return {
        ...state,
        showOverlay: action.showOverlay,
      };
    case SET_PARTICIPANTS:
      return {
        ...state,
        participants: action.participants,
      };
    case SET_MESSAGES:
      return {
        ...state,
        messages: action.messages,
      };
    case SET_ACTIVE_CONVERSATION:
      return {
        ...state,
        activeConversation: action.activeConversation,
      };
    case SET_DIRECT_CHAT_HISTORY:
      return {
        ...state,
        directChatHistory: action.directChatHistory,
      };
    case SET_SOCKET_ID:
      return {
        ...state,
        socketId: action.socketId,
      };
    case ADD_VIDEO_STREAM:
      return {
        ...state,
        videoStreams: [...state.videoStreams, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;