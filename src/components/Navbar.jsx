import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar({ size, resize }) {
  const [viewBar, setViewBar] = useState(false);

  return (
    <div
      className={`
        nav-container
        h-full
        text-white
        transition-all
        duration-300
        fixed md:relative
        top-0
        left-0
        z-50
        bg-gray-900
        flex flex-col
        ${viewBar ? 'w-[25%]' : 'w-[8%]'} 
        md:w-[${size}%]
      `}
    >
      <nav className="flex flex-col h-full">
        {/* Toggle button */}
        <div className="flex justify-center md:justify-start p-4">
          <i
            className="fa-solid fa-bars text-3xl cursor-pointer"
            onClick={() => {
              resize(prev => (prev === 6 ? 25 : 6));
              setViewBar(!viewBar);
            }}
          ></i>
        </div>

        {/* Links */}
        <ul className="pages mt-7 flex flex-col w-full">
          {[
            { to: '/', icon: 'fa-house', label: 'Home' },
            { to: 'movie', icon: 'fa-film', label: 'Movies' },
            { to: 'Tv', icon: 'fa-tv', label: 'Tv Series' },
          ].map((link) => (
            <li key={link.to} className="mb-3 w-full ">
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center w-full p-2 md:p-1 lg:p-2 rounded-lg hover:bg-slate-950 transition
                  ${isActive ? 'bg-slate-800' : 'lg:w-11 '}`
                }
              >
                <i className={`fa-solid ${link.icon} text-2xl md:text-2xl lg:text-3xl w-6 text-center`}></i>
                <span
                  className={`
                    ml-0 sm:ml-4 truncate transition-all duration-300
                    ${viewBar ? 'opacity-100 w-auto block text-sm sm:text-base md:text-lg' : 'opacity-0 w-0 hidden'}
                  `}
                >
                  {link.label}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
