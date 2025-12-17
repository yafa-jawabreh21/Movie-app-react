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
        slidesPerView={6}
        spaceBetween={13}
        pagination={false}
        navigation={false}
        modules={[Pagination, Navigation]}
        className="h-[40vh] ml-[20px]"
      >
        {dataresult.length > 0 ? (
          dataresult.map((el) => {
            const isSeries = !!el.original_name;
            const linkType = isSeries ? "tv" : "movie";
            return (
              <SwiperSlide key={el.id} className="w-44 h-80 rounded-lg">
                <NavLink className="hover:opacity-20" to={`/${linkType}/${el.id}`}>
                  <img
                    className="w-full h-3/4 rounded-lg"
                    src={`${process.env.PUBLIC_URL}/images${el.poster_path}`}
                    alt={el.original_title || el.original_name}
                  />
                </NavLink>
                <h4>{el.original_title || el.original_name}</h4>
              </SwiperSlide>
            );
          })
        ) : (
          <p className="no-data">No matching items found</p>
        )}
      </Swiper>
    </div>
  );
}

export default Card;
