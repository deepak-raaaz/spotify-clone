import React, { Component } from 'react'
// import { styled } from 'styled-components';
import TopHeaderBg from '../assets/images/top-header-bg.jpg'
import TopTracks from './TopTracks';
// import { songList } from '../utils/list';
// import SongList from './elements/SongList';
// import Playlists from './Playlists';

export class Body extends Component {

  render() {
    return (
        <div className="body-container p-5">
          {/*============= top images section ========= */}
          <div className="top-img-container bg-[#797979] rounded-lg h-[15rem] bg-no-repeat bg-cover bg-center overflow-hidden " style={{ backgroundImage: `url(${TopHeaderBg})` }}>
            
          </div>
          {/* ===============Popular section ============== */}
          <div className="popular-section my-5">
            <div className="flex justify-between">
              <span className='font-semibold'>Popular</span><span className="text-[#1DB954]">See all</span>
            </div>
            <div className="my-5">
              {/* {
                songList.map((data,index) => (
                  <SongList index={index}/>
                ))
              } */}
              {/* <Playlists/> */}
              <TopTracks/>
            </div>
          </div>
        </div>
    )
  }
}

export default Body;
