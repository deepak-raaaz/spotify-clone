import axios from 'axios';
import React, { useEffect } from 'react'
import { useStateProvider } from '../utils/StateProvider';
import { reducerCases } from '../utils/Constants';
import SongList from './elements/SongList';

function TopTracksItems() {
    const [ {token, toptracksitems}, dispatch] = useStateProvider();
    useEffect(() => {
      const getTopTracksItemsData  = async () => {
        const response = await axios.get('https://api.spotify.com/v1/me/top/tracks', {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type" : "application/json",
          },
        }
        );
        const {items} = response.data;
        console.log(items);
        function convertMsToMinSec(ms) {
          const totalSeconds = Math.floor(ms / 1000); // Convert milliseconds to seconds
          const minutes = Math.floor(totalSeconds / 60); // Get total minutes
          const seconds = totalSeconds % 60; // Get remaining seconds
        
          return `${minutes}:${seconds}`;
        }
        const playing_id = "0Jiaz0O4AqnJICa9PxHhaR";
        const toptracksitems = items.map(item => {
          return {
            id: item.id,
            name: item.name,
            image_url: item.album.images[2].url,
            duration_s: convertMsToMinSec(item.duration_ms),
            album: item.album.name,
            playing: item.id === playing_id ? true : false,
      }});
        dispatch( {type: reducerCases.SET_TOP_TRACKS_ITEMS, toptracksitems });
        // console.log(toptracksitems);
      };
      getTopTracksItemsData();
      
    },[token, dispatch]);
  
  
    return (
      <div>
        <ul>
          {
            toptracksitems.map((items, index) => {
              return <SongList 
                key={items.id} 
                image_url={items.image_url} 
                index={index} 
                name={items.name}
                duration={items.duration_s}
                album={items.album}
                className={items.playing?"playing__mode":""}/>
            })
          }
        </ul>
      </div>
    )
  }

export default TopTracksItems