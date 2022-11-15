import React, { useState, useRef } from "react";
import movieAPIs from "../../../../App/Api/movieAPIs/movieAPIs";
import { useRequest } from "../../../../App/Hooks/useRequest";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
const MovieDetails = ({ movieId }) => {
  const {
    data: movieDetails,
    isLoading,
    error,
  } = useRequest(() => movieAPIs.getMovieDetails(movieId));
  const [showingTrailer, setShowingTrailer] = useState(false);
  const [showingDetails, setShowingDeatails] = useState(true);

  function openTrailer() {
    setShowingDeatails(false);
    setShowingTrailer(true);
  }
  function closeTrailer() {
    setShowingDeatails(true);
    setShowingTrailer(false);
  }

  const calendarSection = useRef(null);

  return (
    <div
      className="movieDetails "
      style={{
        backgroundImage: `url(${movieDetails?.hinhAnh})`,
      }}
    >
      {" "}
      {showingDetails && (
        <div className="grid grid-cols-12 md:py-10">
          <div className="md:col-span-6 col-span-12 col-start-3">
            <div className="w-4/5 border border-zinc-400 rounded-2xl">
              <img
                className="w-full rounded-2xl"
                src={movieDetails?.hinhAnh}
                alt=""
              />
            </div>
          </div>
          <div className="md:col-span-6 col-span-12  md:pb-0  pb-5">
            <div className="flex flex-col flex-wrap justify-center gap-2 h-full items-center mt-3">
              {" "}
              <div className="bg-sky-900 rounded-2xl p-2">
                <div className="flex  justify-center gap-4">
                  <div className="truncate items-center justify-center leading-4 text-base h-8 px-4 py-2 rounded-lg font-bold tracking-wide text-white font-mono bg-sky-600">
                    {movieDetails?.hot ? <span>Hot</span> : null}
                  </div>
                  <div className="truncate items-center justify-center leading-4 text-base h-8 px-4 py-2 rounded-lg font-bold tracking-wide text-white font-mono bg-sky-600">
                    {movieDetails?.dangChieu ? (
                      <span>Đang Chiếu</span>
                    ) : movieDetails?.sapChieu ? (
                      <span>Sắp chiếu</span>
                    ) : null}
                  </div>
                  <div className="flex truncate items-center justify-center gap-4  text-base h-8 px-4 py-2 rounded-lg font-bold text-lime-400 border border-lime-400">
                    <div>
                      <FontAwesomeIcon icon={faStar} />
                    </div>
                    <div>
                      <span>{movieDetails?.danhGia}</span>
                    </div>
                  </div>
                </div>
                <div className="my-3">
                  <h1 className="text-yellow-100 font-bold text-2xl text-center pb-4">
                    {movieDetails?.tenPhim}
                  </h1>
                  <p className="text-white  sm:text-center md:text-left">
                    {movieDetails?.moTa}
                  </p>
                </div>
                <div className="flex w-full justify-around">
                  <div
                    onClick={openTrailer}
                    className="flex items-center  justify-center text-xl font-bold  text-center bg-cyan-700 h-16 w-32 md:py-2 md:px-3 rounded-3xl hover:border-2 hover:border-cyan-700 hover:text-cyan-700 hover:bg-white cursor-pointer"
                  >
                    <span className="pr-3">Trailer</span>
                    <FontAwesomeIcon icon={faLongArrowAltRight} />
                  </div>
                  <div className="flex items-center  justify-center text-xl  font-bold text-center bg-cyan-700 h-16 w-32  sm:py-4 sm:px-5 rounded-3xl hover:border hover:text-cyan-700 hover:bg-white cursor-pointer">
                    <a
                      onClick={() => {
                        window.scrollTo({
                          top: calendarSection.current.offsetTop,
                          behavior: "smooth",
                        });
                      }}
                    >
                      Đặt vé
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {showingTrailer && (
        <div className="overlay" onClick={closeTrailer}>
          <iframe
            className="trailer"
            marginHeight="50px"
            width="80%"
            height="80%"
            src={movieDetails?.trailer}
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
      <div ref={calendarSection}></div>
    </div>
  );
};

export default MovieDetails;
