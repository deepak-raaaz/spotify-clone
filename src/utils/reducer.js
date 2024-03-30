import { reducerCases } from "./Constants";

export const initialState = {
    token: null,
    userInfo: null,
    playlists : [],
    toptracks : [],
    currentplaying : [],
    recentlyplayed : [],
};

const reducer = (state, action) => {
    switch(action.type) {
        case reducerCases.SET_TOKEN : {
            return {
                ...state,
                token: action.token,
            };
        }
        case reducerCases.SET_PLAYLISTS : {
            return {
                ...state,
                playlists : action.playlists,
            }
        }
        case reducerCases.SET_USER : {
            return {
                ...state,
                userInfo : action.userInfo,
            }
        }
        case reducerCases.SET_TOP_TRACKS_ITEMS : {
            return {
                ...state,
                toptracks : action.toptracks,
            }
        }
        case reducerCases.SET_CURRENT_PLAYING_TRACK : {
            return {
                ...state,
                currentplaying : action.currentplaying,
            }
        }
        case reducerCases.SET_RECENTLY_PLAYED_TRACK : {
            return {
                ...state,
                recentlyplayed : action.recentlyplayed,
            }
        }
        default:
             return state;
    }
};

export default reducer;