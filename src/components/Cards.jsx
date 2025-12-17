import Card from "./Card";
import { NavLink } from "react-router-dom";

function Cards({ title, toprated = [], trending = [], series = [], movies = [], type }) {
  return (
    <div className="mt-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-white relative">
        <h3 className="font-bold mb-4 sm:mb-0 text-xl relative after:content-[''] after:absolute after:w-[16%] after:h-[2.75px] after:bg-red-500 after:bottom-0 after:left-0 after:rounded-full">
          {title}
        </h3>
        <NavLink
          className="bg-inherit rounded-2xl text-center text-white px-3 py-1 text-sm border border-white hover:bg-red-500 hover:border-red-500 transition"
          to={`${type}`}
        >
          View All
        </NavLink>
      </div>

      {/* Cards container */}
      <div className="secondPart mt-6">
        {/* Pass a responsive class to Card */}
        <Card
          toprated={toprated}
          series={series}
          movies={movies}
          trending={trending}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        />
      </div>
    </div>
  );
}

export default Cards;
