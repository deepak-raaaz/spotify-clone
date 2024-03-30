import React from 'react'
import styled from "styled-components";
import SpotifyLogo from "../assets/images/Spotify_Logo_CMYK_Black.png"


function Login() {
    const handleClick = () => {
        const clintId = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
        const redirectUrl = "http://localhost:3000/";
        const apiUrl = "https://accounts.spotify.com/authorize";
        const scope = [
            'user-read-email',
            'user-read-private',
            'user-read-playback-state',
            'user-modify-playback-state',
            'user-read-currently-playing',
            'user-read-playback-position',
            'user-top-read',
            'user-read-recently-played',
        ];
        window.location.href = `${apiUrl}?client_id=${clintId}&redirect_uri=${redirectUrl}&scope=${scope.join(" ")}&response_type=token&show_dialog=true`;
    };


    
  return (
    <Container>
      <img src={SpotifyLogo} alt="" />
      <button onClick={ handleClick }>Connect Spotify</button>
    </Container>
  )
};

export default Login;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background: #1db954;
    img{
        height: 10rem;
    }
    button{
        padding: 1rem 4rem;
        border-radius: 5rem;
        border: none;
        font-size: 1.2rem;
        margin-top: 3rem;
        background-color: black;
        color: #49f585;
        cursor: pointer;
    }
`;