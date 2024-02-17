import { useEffect } from 'react'
import { useStateProvider } from '../utils/StateProvider';
import axios from 'axios';
import { reducerCases } from '../utils/Constants';
import { logout } from './Logout';

// const CurrentlyPlayingTrackContext = createContext();

// export const useCurrentlyPlayingTrackContext = () => {
//     return useContext(CurrentlyPlayingTrackContext);
// };

export const CurrentlyPlayingTrackProvider = () => {
    const [{ token, currentplaying }, dispatch] = useStateProvider();

    useEffect(() => {
        const getCurrentlyPlayingTrackData = async () => {
            await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                },
            }
            )
                .then(response => {
                    // console.log(response);
                    // Assuming the response data is an array of objects
                    // Duration conversion ms to miinutes and seconds
                    function convertMsToMinSec(ms) {
                        // Convert milliseconds to seconds
                        const totalSeconds = Math.floor(ms / 1000);

                        // Calculate minutes and seconds
                        const minutes = Math.floor(totalSeconds / 60);
                        const seconds = totalSeconds % 60;

                        // Format the output MM:SS
                        const formattedMinutes = String(minutes).padStart(2, '0');
                        const formattedSeconds = String(seconds).padStart(2, '0');

                        return `${formattedMinutes}:${formattedSeconds}`;
                    }
                    const items = response.data;
                    if (items.length !== 0) {
                        const currentplaying = {
                            id: items.item.id,
                            name: items.item.name,
                            image_url: items.item.album.images[2].url,
                            duration_s: convertMsToMinSec(items.item.duration_ms),
                            progress_ms: items.progress_ms,
                            progress_s: convertMsToMinSec(items.progress_ms),
                            is_playing: items.is_playing,
                            artists: items.item.artists.map(artist => {
                                return {
                                    id: artist.id,
                                    name: artist.name,
                                }
                            })
                        };
                        // console.log(currentplaying);
                        dispatch({ type: reducerCases.SET_CURRENT_PLAYING_TRACK, currentplaying });
                    } else {
                        dispatch({ type: reducerCases.SET_CURRENT_PLAYING_TRACK, currentplaying: '' });
                    }

                })
                .catch(error => {
                    if (error.response) {
                        // The request was made and the server responded with a status code
                        console.log(error.response.status);
                        if(error.response.status === 401) {
                            const token = logout();
                            dispatch({ type: reducerCases.SET_TOKEN, token});
                        }

                      } else if (error.request) {
                        // The request was made but no response was received
                        console.log('No response received:', error.request);
                      } else {
                        // Something happened in setting up the request that triggered an error
                        console.error('Error:', error.message);
                      }
                });
        };
        getCurrentlyPlayingTrackData();
    }, [token, dispatch]);

    return currentplaying;

}

