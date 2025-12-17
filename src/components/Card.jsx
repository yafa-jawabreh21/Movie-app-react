import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { NavLink } from "react-router-dom";

function Card({ toprated = [], trending = [], series = [], movies = [] }) {
  const [swiperRef, setSwiperRef] = useState(null);

  const datafilter = (data, dataarray, type) => {
    if (!Array.isArray(dataarray) || dataarray.length === 0) return [];

    const top = dataarray[0];
    const idsKey = type === "series" ? "series_ids" : "movies_ids";
    const ids = top[idsKey];

    if (!Array.isArray(ids) || !Array.isArray(data)) return [];

    return data.filter((el) => ids.map(String).includes(String(el.id)));
  };

  let dataresult = [];
  let types = "";

  if (toprated && toprated.length > 0) {
    const seriesData = datafilter(series, toprated, "series");
    const movieData = datafilter(movies, toprated, "movies");
    dataresult = [...seriesData, ...movieData];
    types = seriesData.length > 0 ? "tv" : "movie";
  } else if (trending && trending.length > 0) {
    const seriesData = datafilter(series, trending, "series");
    const movieData = datafilter(movies, trending, "movies");
    dataresult = [...seriesData, ...movieData];
    types = seriesData.length > 0 ? "tv" : "movie";
  }

  return (
    <div className="Card">
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={2} // default for mobile
        spaceBetween={10}
        pagination={false}
        navigation={false}
        modules={[Pagination, Navigation]}
        breakpoints={{
          640: { slidesPerView: 3, spaceBetween: 12 },
          768: { slidesPerView: 4, spaceBetween: 14 },
          1024: { slidesPerView: 5, spaceBetween: 16 },
          1280: { slidesPerView: 6, spaceBetween: 18 },
        }}
        className="h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[55vh] px-2"
      >
        {dataresult.length > 0 ? (
          dataresult.map((el) => {
            const isSeries = !!el.original_name;
            const linkType = isSeries ? "tv" : "movie";
            return (
              <SwiperSlide key={el.id} className="flex flex-col items-center">
                <NavLink className="hover:opacity-80 w-full" to={`/${linkType}/${el.id}`}>
                  <img
                    className="w-full h-60 sm:h-64 md:h-72 lg:h-80 rounded-lg object-cover"
                    src={`${process.env.PUBLIC_URL}/images${el.poster_path}`}
                    alt={el.original_title || el.original_name}
                  />
                </NavLink>
                <h4 className="text-white text-sm sm:text-base mt-2 text-center truncate w-full">
                  {el.original_title || el.original_name}
                </h4>
              </SwiperSlide>
            );
          })
        ) : (
          <p className="text-white">No matching items found</p>
        )}
      </Swiper>
    </div>
  );
}

export default Card;
