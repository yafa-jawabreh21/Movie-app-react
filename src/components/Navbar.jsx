import { useState } from 'react';
import { NavLink } from 'react-router-dom';
function Navbar({size,resize}) {
    const initalsize = size
    const [viewBar , setViewBar] = useState(false)
  return (
    <div 
      className='nav-container h-full text-white transition-all duration-300' 
      style={{ width: `${size}%` }}
    >
      <nav className={viewBar? "items-start":""}>
        <i
  className="fa-solid fa-bars text-3xl cursor-pointer"
  onClick={() => {
    resize(prev => (prev === 6 ? 25 : 6));       // expand sidebar
    setViewBar(!viewBar); // toggle view state
  }}
></i>


        <ul className="pages mt-7">
          <li className='mb-5'>
            <NavLink to="/" className="block p-3 rounded-lg hover:bg-slate-950 transition">
              <i className="fa-solid fa-house text-xl"><span className={viewBar ?"ml-5" :"hidden "}>Home</span></i>
            </NavLink>
          </li>
          <li className='mb-5'>
            <NavLink to="movie" className="block p-3 rounded-lg hover:bg-slate-950 transition">
              <i className="fa-solid fa-film text-xl"><span className={viewBar ?"ml-5" :"hidden"}>Movies</span></i>
            </NavLink>
          </li>
          <li className='mb-5'>
            <NavLink to="Tv" className="block p-3 rounded-lg hover:bg-slate-950 transition">
              <i className="fa-solid fa-tv text-xl"> <span className={viewBar ?"ml-5" :"hidden"}>Tv Series</span></i>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
