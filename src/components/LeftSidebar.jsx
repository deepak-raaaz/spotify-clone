import React from 'react';
import { styled } from 'styled-components';
import LogoImg from '../assets/images/Spotify_Logo_RGB_Green.png'
import NavButton from './elements/NavButton';
import { NavLink } from 'react-router-dom';
import { useStateProvider } from '../utils/StateProvider';
import { reducerCases } from '../utils/Constants';
import HomeIcon from './icons/HomeIcon';
import DiscoverIcon from './icons/DiscoverIcon';
import RadioIcon from './icons/RadioIcon';
import PodcastIcon from './icons/PodcastIcon';
import AlbumsIcon from './icons/AlbumsIcon';
import RecentlyAddedIcon from './icons/RecentlyAddedIcon';
import FavoriteIcon from './icons/FavoriteIcon';
import LocalIcon from './icons/LocalIcon';
import PlaylistIcon from './icons/PlaylistIcon';


function LeftSidebar() {
  const [ dispatch] = useStateProvider();
    
    const logout = () => {
      const token = "";
      dispatch({ type: reducerCases.SET_TOKEN, token});
      window.localStorage.removeItem("token");
      console.log(window.localStorage.getItem("token"));
    };

  return (
    <Container>
      <div className="w-full h-[7rem] flex items-center">
        <img src={LogoImg} alt="" className='h-[2.5rem] ms-6' />
      </div>
      <div className="nav-container">
      <nav>
        <ul className='mb-4 mt-2'>
          <li>
            <NavLink to="/">
              {({ isActive, isPending, isTransitioning }) => (
                <NavButton name={"Home"} className={isActive ? "active" : ""}>
                  <HomeIcon/>
                </NavButton>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/discover">
              {({ isActive, isPending, isTransitioning }) => (
                <NavButton name={"Discover"} className={isActive ? "active" : ""}>
                  <DiscoverIcon />
                </NavButton>
              )}
            </NavLink>
          </li>
          <li>
          <NavLink to="/radio">
              {({ isActive, isPending, isTransitioning }) => (
                <NavButton name={"Radio"}  className={isActive ? "active" : ""}>
                  <RadioIcon/>
                </NavButton>
              )}
          </NavLink>
          </li>
          <li>
          <NavLink to="/albums">
              {({ isActive, isPending, isTransitioning }) => (
                <NavButton name={"Albums"} className={isActive ? "active" : ""}>
                  <AlbumsIcon/>
                </NavButton>
              )}
          </NavLink>
          </li>
          <li>
          <NavLink to="/podcast">
              {({ isActive, isPending, isTransitioning }) => (
                <NavButton name={"Podcast"}  className={isActive ? "active" : ""}>
                  <PodcastIcon/>
                </NavButton>
              )}
          </NavLink>
          </li>
        </ul>
        <span className='uppercase text-sm tracking-widest px-6'>Library</span>
        <ul className='mb-4 mt-2'>
          <li>
          <NavLink to="/recently-added">
              {({ isActive, isPending, isTransitioning }) => (
                <NavButton name={"Recently Added"}  className={isActive ? "active" : ""}>
                  <RecentlyAddedIcon/>
                </NavButton>
              )}
          </NavLink>
          </li>
          <li>
          <NavLink to="/favorite-songs">
              {({ isActive, isPending, isTransitioning }) => (
                <NavButton name={"Favorite Songs"} className={isActive ? "active" : ""}>
                  <FavoriteIcon/>
                </NavButton>
              )}
          </NavLink>
          </li>
          <li>
          <NavLink to="/local-files">
              {({ isActive, isPending, isTransitioning }) => (
                <NavButton name={"Local Files"} className={isActive ? "active" : ""}>
                  <LocalIcon/>
                </NavButton>
              )}
          </NavLink>
          </li>
        </ul>
        <div className="flex justify-between">
          <span className='uppercase text-sm tracking-widest px-6'>playlist</span>
          <span className='px-6 cursor-pointer'>+</span>
        </div>
        <ul className='mb-4 mt-2'>
          <li>
          <NavLink to="/recently-added">
              {({ isActive, isPending, isTransitioning }) => (
                <NavButton name={"Lo-fi Music"}  className={isActive ? "active" : ""}>
                  <PlaylistIcon/>
                </NavButton>
              )}
          </NavLink>
          </li>
          <li>
          <NavLink to="/recently-added">
              {({ isActive, isPending, isTransitioning }) => (
                <NavButton name={"Lo-fi Music"} className={isActive ? "active" : ""}>
                  <PlaylistIcon/>
                </NavButton>
              )}
          </NavLink>
          </li>
          <li>
          <NavLink to="/recently-added">
              {({ isActive, isPending, isTransitioning }) => (
                <NavButton name={"Lo-fi Music"}  className={isActive ? "active" : ""} >
                  <PlaylistIcon/>
                </NavButton>
              )}
          </NavLink>
          </li>
        </ul>
      </nav>
      <button onClick={logout}>Logout</button>
      </div>
    </Container>
  )
}

export default LeftSidebar;

const Container = styled.div`
  overflow-y: hidden;
  width: 100%;
  height: 100%; 
  padding-bottom: 5rem;
  .nav-container{
    height: calc(100% - 7rem);
    overflow-y: auto;
    /* background-color: red; */
  }
  /* width */
  .nav-container::-webkit-scrollbar {
    display: none;
  }
`;