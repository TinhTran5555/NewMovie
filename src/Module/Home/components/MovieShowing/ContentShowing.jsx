import React, { useState, Fragment } from "react";

import Slider from "react-slick";
import useViewport from "../../../../App/Hooks/useViewport";
import { useNavigate } from "react-router-dom";
import Loader from "../../../../UI/Display/Loader/Loader";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}



const ContentShowing = ({ itemMovie, isLoading}) => {
  const viewPort = useViewport();
  const isMobile = viewPort.width >= 640;
  const isTablet = viewPort.width >= 768;
  const isLapTop = viewPort.width >= 1024;
  const isLapTopL = viewPort.width >= 1280;
  
  
  let valueSlidesToShow = 1;


  
  if (isMobile) {
    valueSlidesToShow = 2;
   
  }
  if (isTablet) {
    valueSlidesToShow = 2;
   
  }
  if (isLapTop) {
    valueSlidesToShow = 3;
   
  }
  if (isLapTopL) {
    valueSlidesToShow = 4;
   
  }
  var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: valueSlidesToShow,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  appendDots: dots => (
    <></>
  ),
};
  const [display, setDisplay] = useState(false);
  const [indexHover, setIndexHover] = useState(null);

  const navigate = useNavigate();
  const goToMovie = (movieId) => {
    navigate(`/movie/${movieId}`);
  };
  return (
    <Fragment >

    {isLoading && <Loader />}
    {!isLoading && (
    <Slider {...settings}>
      {itemMovie?.map((movie, index) => {
        return (
          <section key={movie.maPhim} className="item rounded-lg" >
            <div className="content flex justify-center rounded-lg">
              <div
                onMouseOver={() => {
                  setIndexHover(index);
                  setDisplay(true);
                }}
                onMouseLeave={() => {
                  setIndexHover(null);
                  setDisplay(false);
                }}
                className=" w-full img bg-black rounded-lg"
                style={{
                  backgroundImage: `url(${movie.hinhAnh})`,
                }}
              >
                {display === true && index === indexHover && (
                  <>
                    {" "}
                    <div className="opacity-10 absolute w-full h-full bg-black"></div>
                    <div className="info absolute w-full bottom-0 text-white opacity-100 flex flex-col justify-center items-center">
                      <div className="opacity-70 absolute w-full h-full bg-black z-1 rounded-b-lg"></div>
                      <span className="font-bold text-2xl z-10 mb-2">
                        {movie.tenPhim}
                      </span>
                      <div className="infoButton z-10 flex w-4/5 justify-center mb-2">
                        <button className="font-bold px-2.5 rounded-lg text-xl bg-red-600"
                        onClick={() => goToMovie(movie.maPhim)}>
                          CHI TIẾT
                        </button>
                       
                      </div>
                    </div>{" "}
                  </>
                )}
              </div>
            </div>
          </section>
        );
      })}
    </Slider>
    )}
    </Fragment>
  );
};

export default ContentShowing;
