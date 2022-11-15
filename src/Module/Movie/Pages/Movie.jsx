import { Fragment } from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/MovieDetails";
import ShowTimesDetails from "../components/ShowTimesDetails";

const Movie = () => {
  const { movieId } = useParams();
  
  return (
    <Fragment >
      <MovieDetails movieId={movieId}/>
       <ShowTimesDetails movieId={movieId}/>
    </Fragment>
  );
};

export default Movie;
