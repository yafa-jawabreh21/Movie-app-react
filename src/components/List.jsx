import React, { useRef, useState, useEffect } from 'react';
import { NavLink, useOutletContext, useSearchParams } from 'react-router-dom';
function List({ type, movies, series }) {
  const datasearch = useRef("");
  const {size} = useOutletContext()
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredData, setFilteredData] = useState([]);

  const searchValue = searchParams.get("search") || "";
  console.log(size)
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
    setSearchParams(value ? { search: value } : {}); // تحديث الرابط
  };
  const listToShow =
    searchValue.length > 0 ? filteredData : type === "movie" ? movies : series;

  return (
    <div className='justify-center text-center my-0 mx-60'>
      <form className='search-part' onSubmit={searchHandler}>
        <input className='pl-4 pr-40 rounded-2xl border-0 mt-8 py-1 '
          type='search'
          placeholder='Search...'
          name='search'
          defaultValue={searchValue}
          ref={datasearch}
        />
        <button className='text-red-600 bg-transparent border-0 relative -left-12 text-[22px]' type='submit'>
          🔍
        </button>
      </form>

      <div className='flex flex-wrap justify-evenly items-start items-baseline w-full h-fit mt-10'>
        {listToShow && listToShow.length > 0 ? (
          listToShow.map((el) => {
            const imageUrl = `${process.env.PUBLIC_URL}/images${el.poster_path}`;
            const title = el.original_title || el.original_name;
            return (
              <div className='w-[17%] h-fit text-white font-normal rounded-lg mb-5' key={el.id}>
                <NavLink className='text-white' to={`/${type}/${el.id}`}>
                  <img style={{height: `${100 - size}%`}} className='h-[188px] w-full rounded-[10px] transition-all duration-300 ease-[cubic-bezier(.4,0,.2,1)]' src={imageUrl} alt={title} />
                  <h4>{title}</h4>
                </NavLink>
              </div>
            );
          })
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
}

export default List;
