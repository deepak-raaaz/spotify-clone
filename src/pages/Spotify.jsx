import React, { useEffect } from 'react'
import { styled } from 'styled-components';
import Body from './Body';
import Navbar from '../components/Navbar';
import Sidebar from '../components/LeftSidebar';
import Footer from '../components/Footer';
import RightSidebar from '../components/RightSidebar';
import { useStateProvider } from '../utils/StateProvider';
import axios from 'axios';
import { reducerCases } from '../utils/Constants';

function Spotify() {

  const [ {token }, dispatch] = useStateProvider();
  useEffect(() => {
    const getUserInfo = async () => {
      const { data } = await axios.get("https://api.spotify.com/v1/me",{
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type" : "application/json",
        },
      });
      // console.log( {data});
      const userInfo = {
        userId: data.id,
        userName: data.display_name,
        image_url: data.images[1].url,
      };
      // console.log(userInfo);
      dispatch({type: reducerCases.SET_USER, userInfo});
    };
    getUserInfo();
  },[dispatch, token]);

  return (
    <Container>
    <div className=" grid grid-cols-10 grid-rows-1 text-[#FFFFFF] h-[100vh] overflow-hidden">
       <div className="bg-[#121212] left-sidebar col-span-2 h-[100vh]">
         <Sidebar/>
       </div>
       <div className=" bg-[#121212] col-span-6 h-[100vh]">
        <div className="">
         <Navbar/>
        </div>
        <div className="body overflow-auto">
         <Body/>
        </div>
       </div>
       <div className=" bg-[#121212] right-sidebar col-span-2 h-[100vh]">
         <RightSidebar/>
       </div>
       <div className="footer h-[5rem] col-span-10 box__glass">
         <Footer/>
       </div>
    </div>
    </Container>
    // <Container>
    //   <div className="left-sidebar">
    //     <Sidebar/>
    //   </div>
    //   <div className="body h-full">
    //     <Navbar/>
    //     <Body/>
    //   </div>
    //   <div className="right-sidebar">
    //     <RightSidebar/>
    //   </div>
    //   <div className="footer">
    //     <Footer/>
    //   </div>
    // </Container>
  )
}

export default Spotify;

const Container = styled.div`
  .body{
    height: calc(100vh - 5rem);
  }
  /* width */
  .body::-webkit-scrollbar {
    width: 3px;
  }

  /* Track */
  .body::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  .body::-webkit-scrollbar-thumb {
    background: #282727;
  }

  /* Handle on hover */
  .body::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  /* max-width: 100wh;
  min-height: 100vh;
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-areas:
  "left-sidebar    main-view       right-sidebar " 
  "now-playing-bar now-playing-bar now-playing-bar";
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr auto;
  background: #121212;
  color: #FFFFFF; */

  /* .left-sidebar{
    height: 100%;
    overflow-y: hidden;
    grid-area: left-sidebar;
    width: 17rem;
    background: #212121;
  }
  .body{
    grid-area: main-view;
  }
  .right-sidebar{
    grid-area: right-sidebar;
    width: 17rem;
    background: #212121;
  }
  .footer{
    grid-area: now-playing-bar;
    height: 6rem;
    background: #131313;
  } */

  .box__glass{
    background: rgba(18,18,18,0.64);
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 15px );
    -webkit-backdrop-filter: blur( 15px );
    /* border-radius: 10px; */
    /* border: 1px solid rgba( 255, 255, 255, 0.18 ); */
  }





`;