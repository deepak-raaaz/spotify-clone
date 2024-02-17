import React from 'react'
import SearchIcon from './icons/SearchIcon';
import ArrowLeftIcon from './icons/ArrowLeftIcon';
import ArrowRightIcon from './icons/ArrowRightIcon';
import NotificationIcon from './icons/NotificationIcon';

function Navbar() {
  return (
      <div className="nav-container flex justify-between px-5  items-center h-[5rem]">
        <div className="navigation flex items-center">
            <div className="bg-[#212121] p-2 rounded-lg">
              <ArrowLeftIcon height="20" width="20" strokeColor="#ffffff"/>
            </div>
            <span className='text-sm mx-2 text-[#ffffffb8]'>Home</span>
            <ArrowRightIcon width="15" height="15" strokeColor="#ffffff"/>
            <span className='text-sm mx-2 '>Popular Artist</span>
        </div>
        <div className="flex items-center">
          <div className="search-container flex bg-[#212121] px-3 py-2 rounded-lg mx-5">
            <SearchIcon strokeColor="#ffffff"/>
            <input type='tect' placeholder='Search music, artist, albums...' className='bg-transparent text-[#ffffff] ms-3 w-[15rem] focus:outline-none placeholder:text-[#797979]'/>
          </div>
          <div className="bg-[#212121] p-2 rounded-lg">
            <NotificationIcon fill="#ffffff"/>
          </div>
        </div>
      </div>
  )
}

export default Navbar;
