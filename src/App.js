import React, { useEffect } from "react";
import Login from "./components/Login";
import { useStateProvider } from "./utils/StateProvider";
import { reducerCases } from "./utils/Constants";
import Spotify from "./pages/Spotify";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  const [{ token }, dispatch] = useStateProvider();
  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");
    if(!token && hash){
      token = hash.substring(1).split("&")[0].split("=")[1];
      window.location.hash = "";
      window.localStorage.setItem("token", token);
    }
    dispatch({ type: reducerCases.SET_TOKEN, token});
  }, []);

  return (
    <div className="App">
      {
        // console.log(token)
        token
        ? 
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Spotify/>} />
            <Route path="/discover" element={<Spotify/>} />
            <Route path="/radio" element={<Spotify/>} />
            <Route path="/albums" element={<Spotify/>} />
            <Route path="/podcast" element={<Spotify/>} />
          </Routes>
        </BrowserRouter> 
        : 
        <Login/>
      }
    </div>
  );
};
