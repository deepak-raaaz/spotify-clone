import React from 'react'
import { TopTracksProvider } from '../services/getTopTracks'
import SongList from '../components/elements/SongList';
import { useStateProvider } from '../utils/StateProvider';

function TopTracks() {
    const [{ toptracks }] = useStateProvider();
  return (
    <TopTracksProvider>
        <div>
            <ul>
            {
                toptracks.map((items, index) => {
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
    </TopTracksProvider>
  )
}

export default TopTracks