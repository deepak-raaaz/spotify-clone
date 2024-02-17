import React from 'react'
import { CurrentlyPlayingTrackProvider } from '../services/getCurrentlyPlayingTrack'
import { useStateProvider } from '../utils/StateProvider';
import ShuffleIcon from './icons/ShuffleIcon';
import PreviousIcon from './icons/PreviousIcon';
import PauseIcon from './icons/PauseIcon';
import NextIcon from './icons/NextIcon';
import RepeateIcon from './icons/RepeateIcon';
import VolumeIcon from './icons/VolumeIcon';
import LikeIcon from './icons/LikeIcon';
import { Slider } from '@mui/material';
import { RecentlyPlayedTrackProvider } from '../services/getRecentlyPlayedTrack';

function Footer() {
  const [{ currentplaying, recentlyplayed }] = useStateProvider();
  CurrentlyPlayingTrackProvider();
  const customColor = "#ffffff";
  RecentlyPlayedTrackProvider();
  console.log(recentlyplayed);
  return (
    <>
      {
        currentplaying.length !== 0 ?
          <div className="px-6 h-full relative flex items-center justify-between ">
            <div className="flex w-[32%] items-center">
              <div className="h-[3.5rem] w-[3.5rem] overflow-hidden rounded-lg">
                <img src={currentplaying.image_url} alt="" className='h-full w-full' />
              </div>
              <div className="mx-4">
                <span className='font-semibold'>{currentplaying.name}</span>
                <div>
                  {
                    currentplaying.artists.map((item, index, arr) => {
                      return <span key={item.id} className='text-xs text-[#ffffffb8]'>
                        {item.name}{index !== arr.length - 1 ? ', ' : ''}
                      </span>
                    })
                  }
                </div>
              </div>
              <div className="mx-4">
                <LikeIcon fill="#ffffff" />
              </div>
            </div>
            <div className="flex items-center w-[32%] justify-center">
              <div className="mx-3">
                <ShuffleIcon />
              </div>
              <div className="mx-3">
                <PreviousIcon />
              </div>
              <div className="mx-3">
                <PauseIcon />
              </div>
              <div className="mx-3">
                <NextIcon />
              </div>
              <div className="mx-3">
                <RepeateIcon />
              </div>
            </div>
            <div className="flex items-center w-[32%] justify-end">
              <span>1:45/4:09</span>
              <div className="mx-3">
                <VolumeIcon />
              </div>
              <div className=" mt-1 mx-2 w-[10rem]">
                <Slider
                  defaultValue={50}
                  aria-label="Default"
                  // valueLabelDisplay="auto"
                  sx={{
                    color: customColor,
                    '& .MuiSlider-thumb': {
                      '&:hover, &.Mui-active': {
                        boxShadow: `0px 0px 8px 6px ${customColor}80`, // Change thumb color on hover or active state
                      },
                    },
                    '& .MuiSlider-track': {
                      backgroundColor: customColor, // Change track color
                    },
                    '& .MuiSlider-rail': {
                      backgroundColor: `${customColor}50`, // Change rail color
                    },
                    '& .MuiSlider-thumb': {
                      width: 8, // Initial width
                      height: 8, // Initial height
                      transition: 'width 0.2s, height 0.2s', // Smooth transition effect
                      opacity: 0, // Initially hidden
                      '&:hover, &:focus': {
                        width: 16, // Enlarged width on focus
                        height: 16, // Enlarged height on focus
                        opacity: 1, // Visible on hover or focus
                      },
                    }
                  }} />
              </div>
            </div>
            <div className="absolute -top-4 left-0 w-[100%]">
              <Slider
                size="small"
                defaultValue={50}
                aria-label="Default"
                // valueLabelDisplay="auto"
                sx={{
                  color: customColor,
                  '& .MuiSlider-thumb': {
                    '&:hover, &:focus': {
                      boxShadow: `0px 0px 8px 6px ${customColor}80`, // Change thumb color on hover or focus
                    },
                  },
                  '& .MuiSlider-track': {
                    backgroundColor: customColor, // Change track color on thumb hover
                    '&:hover': {
                      backgroundColor: '#1DB954', // Change track color on hover
                    },
                  },
                  '& .MuiSlider-rail': {
                    backgroundColor: `${customColor}50`, // Change rail color
                  },
                  '& .MuiSlider-thumb': {
                    width: 8, // Initial width
                    height: 8, // Initial height
                    transition: 'width 0.2s, height 0.2s, opacity 0.2s', // Smooth transition effect
                    opacity: 0, // Initially hidden
                    '&:hover, &:focus': {
                      width: 16, // Enlarged width on focus
                      height: 16, // Enlarged height on focus
                      opacity: 1, // Visible on hover or focus
                    },
                  },
                }} />
            </div>
          </div> : <>
            {/* {console.log(currentplaying)} */}
          </>
      }
    </>




  )
}

export default Footer