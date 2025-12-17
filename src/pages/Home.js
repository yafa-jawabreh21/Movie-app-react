import React, { useRef,useMemo } from "react";
import { useOutletContext } from "react-router-dom";
import Cards from "../components/Cards";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Home = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const { series, movies, toprated, trending } = useOutletContext();

  const getTopRatedItems = useMemo(() => {
  if (!Array.isArray(toprated) || toprated.length === 0) return [];

  const { series_ids = [], movies_ids = [] } = toprated[0] || {};

  // تحويل IDs إلى أرقام لمطابقة القيم النصية أو العكس
  const seriesIdStrings = series_ids.map(String);
  const movieIdStrings = movies_ids.map(String);

  const topSeries = Array.isArray(series)
    ? series.filter((s) => seriesIdStrings.includes(String(s.id)))
    : [];
  const topMovies = Array.isArray(movies)
    ? movies.filter((m) => movieIdStrings.includes(String(m.id)))
    : [];

  return [...topSeries, ...topMovies];
}, [series, movies, toprated]);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty("--progress", 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };
  
  return (
    <div className="pb-12">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        pagination={false}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="w-full h-screen"
      >
        {getTopRatedItems && getTopRatedItems.length > 0 ? (
          getTopRatedItems.map((el) => (
            <SwiperSlide key={el.id}>
              <div
                className="flex bg-no-repeat bg-center bg-cover w-full h-full flex-wrap content-center justify-center gap-6"
                style={{
                  backgroundImage: `linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0.98), rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4)), url(${process.env.PUBLIC_URL}/images${el.poster_path})`,
                }}
              >
              <div className="SwiperImage w-64 h-96 bg-no-repeat bg-center bg-cover rounded-lg" style={{
                  backgroundImage: ` url(${process.env.PUBLIC_URL}/images${el.poster_path})`,
                }}></div>
                <div className=" h-fit w-1/3 text-left text-white p-6">
                  <h2 className="Title">
                    {el.original_name || el.original_title}
                  </h2>
                  <p className="text-[rgb(211,186,186)] mt-5 ">{el.overview}</p>
                </div>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <div className="SwiperContant empty">No data available.</div>
          </SwiperSlide>
        )}

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>

      {/* Cards */}
      <div className="px-4 sm:px-6 md:px-12 lg:px-20 mt-12">
        <div className="text-white mb-8">
          <Cards title="Trending movies" trending={trending} movies={movies} type="movie" />
        </div>
        <div className="text-white mb-8">
          <Cards title="Top rated movies" toprated={toprated} movies={movies} type="movie" />
        </div>
        <div className="text-white mb-8">
          <Cards title="Trending series" trending={trending} series={series} type="tv" />
        </div>
        <div className="text-white mb-8">
          <Cards title="Top rated series" toprated={toprated} series={series} type="tv" />
        </div>
      </div>
    </div>
  );
};

export default Home;
