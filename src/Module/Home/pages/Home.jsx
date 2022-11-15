import { Fragment } from "react";
import Banner from "../components/Banner/";
import Cinema from "../components/Cinema";
import MovieShowing from "../components/MovieShowing";

const Home = () => {
  return (
    <Fragment >
      <Banner />
       <MovieShowing />
      <Cinema/>
    </Fragment>
  );
};

export default Home;
