import { useEffect } from 'react'
import { useStateProvider } from '../utils/StateProvider';
import axios from 'axios';
import { reducerCases } from '../utils/Constants';
import { logout } from './Logout';

export const RecentlyPlayedTrackProvider = () => {
    const [{ token, recentlyplayed }, dispatch] = useStateProvider();

    useEffect(() => {
        const getRecentlyPlayedTrackData = async () => {
            await axios.get('https://api.spotify.com/v1/me/player/recently-played?limit=20', {
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
                    const data = response.data;
                    if (data.length !== 0) {
                        const recentlyplayed = data.items.map(item => {
                            return {
                                id: item.track.id,
                                played_at: item.played_at,
                                name: item.track.name,
                                image_url: item.track.album.images[2].url,
                                duration_s: convertMsToMinSec(item.track.duration_ms),
                                artists: item.track.artists.map(artist => {
                                    return {
                                        id: artist.id,
                                        name: artist.name,
                                    }
                                }),
                            }
                        })
                        // console.log(data);
                        dispatch({ type: reducerCases.SET_RECENTLY_PLAYED_TRACK, recentlyplayed });
                    } else {
                        dispatch({ type: reducerCases.SET_RECENTLY_PLAYED_TRACK, recentlyplayed: '' });
                    }

                })
                .catch(error => {
                    if (error.response) {
                        // The request was made and the server responded with a status code
                        console.log(error.response.status);
                        if (error.response.status === 401) {
                            const token = logout();
                            dispatch({ type: reducerCases.SET_TOKEN, token });
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
        getRecentlyPlayedTrackData();
    }, [token, dispatch]);

    return recentlyplayed;
}