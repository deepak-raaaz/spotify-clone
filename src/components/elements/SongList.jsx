import React from 'react';
import HeadphoneIcon from '../icons/HeadphoneIcon';
import ClockIcon from '../icons/ClockIcon';
import LikeIcon from '../icons/LikeIcon';
import DotsIcon from '../icons/DotsIcon';
import { styled } from 'styled-components';
// import SongImg from '../../assets/images/song-img.png';

function SongList(props) {
    return (
        <Container>
            <div className="">
                <div className={`grid grid-cols-12 gap-2 py-3 items-center ${props.className} song__list__container`}>
                    <div className="flex justify-center">
                        <span>{props.index + 1 }</span>
                    </div>
                    <div className="flex justify-center">
                        <div className="w-[3rem] h-[3rem] overflow-hidden rounded-lg">
                        <img src={props.image_url} alt="" className='w-[3rem] h-[3rem]' />
                        </div>
                    </div>
                    <span className='col-span-3'>{props.name}</span>
                    <div className='flex col-span-3 justify-center items-center'>
                        <HeadphoneIcon fill="#ffffff" />
                        <span className="ms-3 w-[11rem]">{props.album}</span>
                    </div>
                    <div className='flex col-span-2 justify-center'>
                        <ClockIcon fill="#ffffff" />
                        <span className='ms-3 w-[3rem]'>{props.duration}</span>
                    </div>
                    <div className="flex justify-center">
                        <LikeIcon fill="#ffffff" />
                    </div>
                    <div className="flex justify-center">
                        <DotsIcon fill="#ffffff" />
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-2">
                    <div></div>
                    <div className="col-span-11 h-[1.5px] bg-[#4D4D4D]"></div>
                </div>
            </div>
        </Container>
    )
}

export default SongList;

const Container = styled.div`
    .playing__mode{
        background: linear-gradient(90deg, rgba(255,255,255,0) 7%, rgba(255,255,255,0.12) 39%, rgba(255,255,255,0) 94%);
    }
    .song__list__container:hover{
        background: linear-gradient(90deg, rgba(255,255,255,0) 7%, rgba(255,255,255,0.12) 39%, rgba(255,255,255,0) 94%);
    }
`;