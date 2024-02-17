import React, { createContext, useContext, useEffect } from 'react';
import { useStateProvider } from '../utils/StateProvider';
import axios from 'axios';
import { reducerCases } from '../utils/Constants';

const TopTracksContext = createContext();

export const useTopTracksContext = () => {
  return useContext(TopTracksContext);
};

export const TopTracksProvider = ({ children }) => {
  const [{ token, toptracks }, dispatch] = useStateProvider();

  useEffect(() => {
    const getTopTracksItemsData = async () => {
      await axios.get('https://api.spotify.com/v1/me/top/tracks', {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      }
      )
        .then(response => {
          const { items } = response.data;
          // console.log(items);

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
          const playing_id = "0Jiaz0O4AqnJICa9PxHhaR";

          //storing response data in new variable
          const toptracks = items.map(item => {
            return {
              id: item.id,
              name: item.name,
              image_url: item.album.images[2].url,
              duration_s: convertMsToMinSec(item.duration_ms),
              album: item.album.name,
              playing: item.id === playing_id ? true : false,
            }
          });
          dispatch({ type: reducerCases.SET_TOP_TRACKS_ITEMS, toptracks });
          // console.log(toptracksitems);

        })
        .catch(error => {
          if (error.response) {
            // The request was made and the server responded with a status code
            console.error('Response status code:', error.response.status);
          } else if (error.request) {
            // The request was made but no response was received
            console.error('No response received:', error.request);
          } else {
            // Something happened in setting up the request that triggered an error
            console.error('Error:', error.message);
          }
        });


    };
    getTopTracksItemsData();

  }, [token, dispatch]);


  return (
    <TopTracksContext.Provider value={{ toptracks }}>
      {children}
    </TopTracksContext.Provider>
  );
};
