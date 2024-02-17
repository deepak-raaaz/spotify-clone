import React from 'react'
import { styled } from 'styled-components';

function NavButton(props) {
  return (
    <Container>
    <div className={`${props.className} tab-menu my-2`}>
        <div className="px-6 py-3 flex items-center cursor-pointer">
          {props.children}
          <img src={props.icon} alt="" />
          <span className=' ms-5 font-medium text-[#ffffffb8]'>{props.name}</span>
        </div>
    </div>
    </Container>
  )
}

export default NavButton;

const Container = styled.div`
    .active{
        border-right: 5px solid #1DB954;
        background: linear-gradient(to right, rgba(255,255,255,0.06), transparent);
    }
    .active span{
        font-weight: 600;
        color: #ffffff;
    }
`;