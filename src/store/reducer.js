import Actions from "./actions";
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
  SET_SOCKET_ID,
  // ... other actions
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
  socketId: null,
  videoStreams: [], // Add videoStreams to the initial state
};


const reducer = (state = initState, action) => {
  switch (action.type) {
    case Actions.SET_IS_ROOM_HOST:
      return {
        ...state,
        isRoomHost: action.isRoomHost,
      };
    case Actions.SET_CONNECT_ONLY_WITH_AUDIO:
      return {
        ...state,
        connectOnlyWithAudio: action.onlyWithAudio,
      };
    case Actions.SET_ROOM_ID:
      return {
        ...state,
        roomId: action.roomId,
      };
    case Actions.SET_IDENTITY:
      return {
        ...state,
        identity: action.identity,
      };
    case Actions.SET_SHOW_OVERLAY:
      return {
        ...state,
        showOverlay: action.showOverlay,
      };
    case Actions.SET_PARTICIPANTS:
      return {
        ...state,
        participants: action.participants,
      };
    case Actions.SET_MESSAGES:
      return {
        ...state,
        messages: action.messages,
      };
    case Actions.SET_ACTIVE_CONVERSATION:
      return {
        ...state,
        activeConversation: action.activeConversation
      }
    case Actions.SET_DIRECT_CHAT_HISTORY:
      return {
        ...state,
        directChatHistory: action.directChatHistory
      };
    case Actions.SET_SOCKET_ID:
      return {
        ...state,
        socketId: action.socketId
      }
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
