import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from 'react-router-dom';
import { useSelector ,useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getMovies, getSeries, getToprated, getTrending } from "./store/MovieSlice";
function App() {

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getMovies())
    dispatch(getSeries())
    dispatch(getToprated())
    dispatch(getTrending())
  },[dispatch])

  const {movies , series ,toprated ,trending } = useSelector((state)=>state.movietv)
  const [size,setSize]= useState(6)
  return (
    <>
      <div className="App flex ">
      <Navbar size={size} resize={(newsize)=>setSize(newsize)}/>
      <div className="main min-h-screen" style={{ width: `${100 - size}%`,
    marginLeft: `${size}%`}}>
        <Outlet context={{ movies ,series ,toprated ,trending ,size}}/>
      </div>
    </div>
    {/* <Footer /> */}
    </>
  );
}

export default App;
