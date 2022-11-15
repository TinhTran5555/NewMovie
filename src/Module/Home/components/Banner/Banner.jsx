import React, { Fragment, useState } from "react";
import Loader from "../../../../UI/Display/Loader/Loader";
import { useRequest } from "../../../../App/Hooks/useRequest";
import movieAPIs from "../../../../App/Api/movieAPIs/movieAPIs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TRAILERS = [
  "https://www.youtube.com/embed/uqJ9u7GSaYM",
  "https://www.youtube.com/embed/kBY2k3G6LsM",
  "https://www.youtube.com/embed/Eu9G8nO5-Ug",
];
const Banner = () => {
 
  const { data: banners, isLoading: getLoading } = useRequest(() =>
    movieAPIs.getBanners()
  );

  const bannersMapped = banners?.map((banner, index) => {
    return { ...banner, trailer: TRAILERS[index] };
  });
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
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div
        style={{
          bottom: "0",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };
  const [showingTrailer, setShowingTrailer] = useState(false);
  function openTrailer() {
    setShowingTrailer(true);
  }
  function closeTrailer() {
    setShowingTrailer(false);
  }
  return (
    <Fragment >
      {getLoading && <Loader />}
      {!getLoading && (
        <Slider className="banner" {...settings}>
          {bannersMapped?.map((banner, index) => {
            return (
              <div key={banner.maBanner} >
                <div
                  className="bannerContent"
                  style={{ backgroundImage: `url(${banner.hinhAnh})` }}
                >
                  <button className="buttonPlay" onClick={openTrailer}>
                    <svg
                      width={131}
                      height={131}
                      viewBox="0 0 131 131"
                      fill="none"
                    >
                      <path
                        className="inner-circle"
                        d="M65 21C40.1488 21 20 41.1488 20 66C20 90.8512 40.1488 111 65 111C89.8512 111 110 90.8512 110 66C110 41.1488 89.8512 21 65 21Z"
                        fill="white"
                      />
                      <circle
                        className="outer_circle"
                        cx="65.5"
                        cy="65.5"
                        r={64}
                        stroke="white"
                      />
                      <path
                        className="play"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M60 76V57L77 66.7774L60 76Z"
                        fill="#BF2428"
                      />
                    </svg>
                  </button>
                  {showingTrailer && (
                    <div className="overlay" onClick={closeTrailer}>
                      <iframe
                        className="trailer"
                        marginHeight="50px"
                        width="80%"
                        height="80%"
                        src={banner.trailer}
                        title="YouTube video player"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </Slider>
      )}
    </Fragment>
  );
};

export default Banner;
