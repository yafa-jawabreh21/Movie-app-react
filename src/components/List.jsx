import React, { useRef, useState, useEffect } from 'react';
import { NavLink, useOutletContext, useSearchParams } from 'react-router-dom';

function List({ type, movies, series }) {
  const datasearch = useRef("");
  const { size } = useOutletContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredData, setFilteredData] = useState([]);

  const searchValue = searchParams.get("search") || "";

  useEffect(() => {
    let data = [];
    const keyword = searchValue.toLowerCase();

    if (type === "movie" && movies) {
      data = movies.filter((el) =>
        el.original_title.toLowerCase().includes(keyword)
      );
    } else if (type === "tv" && series) {
      data = series.filter((el) =>
        el.original_name.toLowerCase().includes(keyword)
      );
    }

    setFilteredData(data);
  }, [searchValue, movies, series, type]);

  const searchHandler = (e) => {
    e.preventDefault();
    const value = datasearch.current.value.trim();
    setSearchParams(value ? { search: value } : {});
  };

  const listToShow =
    searchValue.length > 0 ? filteredData : type === "movie" ? movies : series;

  return (
    <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20">
      {/* Search */}
      <form className="flex justify-center mt-8 relative" onSubmit={searchHandler}>
        <input
          className="pl-4 pr-10 py-2 rounded-2xl border border-gray-300 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-red-600"
          type="search"
          placeholder="Search..."
          name="search"
          defaultValue={searchValue}
          ref={datasearch}
        />
        <button
          className="absolute right-10 top-0 mt-2 mr-2 text-red-600 text-lg"
          type="submit"
        >
          🔍
        </button>
      </form>

      {/* Movies/Series Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-10">
        {listToShow && listToShow.length > 0 ? (
          listToShow.map((el) => {
            const imageUrl = `${process.env.PUBLIC_URL}/images${el.poster_path}`;
            const title = el.original_title || el.original_name;
            return (
              <div
                className="text-white font-normal rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
                key={el.id}
              >
                <NavLink to={`/${type}/${el.id}`}>
                  <img
                    className="w-full h-[280px] sm:h-64 md:h-72 lg:h-80 object-cover rounded-lg"
                    src={imageUrl}
                    alt={title}
                  />
                  <h4 className="mt-2 text-sm sm:text-base md:text-lg">{title}</h4>
                </NavLink>
              </div>
            );
          })
        ) : (
          <p className="text-center text-white col-span-full">No results found.</p>
        )}
      </div>
    </div>
  );
}

export default List;
