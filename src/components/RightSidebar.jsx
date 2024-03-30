import React from 'react'
import { RecentlyPlayedTrackProvider } from '../services/getRecentlyPlayedTrack';
import { useStateProvider } from '../utils/StateProvider';
import moment from 'moment/moment';

function RightSidebar() {
  const [{ recentlyplayed, userInfo }] = useStateProvider();
  RecentlyPlayedTrackProvider();

  return (
    <>
      <div className='mx-4 my-6 flex space-x-4 items-center'>
        {
          userInfo &&
          <>
            <div className="w-[3rem] h-[3rem] overflow-hidden rounded-full min-w-[3rem] aspect-square">
              <img src={userInfo.image_url} alt="" className='w-[3rem] h-[3rem] ' />
            </div>
            <div>

              <span className='font-semibold text-lg'>{userInfo.userName}</span>
            </div>
          </>
        }
      </div>
      <div className='mx-4'>
        <div className='my-4 flex justify-between'>
          <span className='font-semibold'>Recent Played</span>
          <span className='text-[#1DB954]'>See all</span>
        </div>
        <div>
          <div>
            {
              recentlyplayed && recentlyplayed.map((items) => (
                <div className="flex my-3 space-x-3" key={items.id}>
                  <div className="w-[3rem] h-[3rem] overflow-hidden rounded-lg min-w-[3rem] aspect-square">
                    <img src={items.image_url} alt="" className='w-[3rem] h-[3rem] ' />
                  </div>
                  <div>
                    <span className='line-clamp-1'>{items.name}</span>
                    <span className='text-[14px] text-gray-400'>{moment.utc(items.played_at).local().startOf('seconds').fromNow()}</span>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default RightSidebar