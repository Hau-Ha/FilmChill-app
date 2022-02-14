import React from "react";
import { Link } from "react-router-dom";

import "./MovieListingHeader.scss";

function MovieListingHeader(props) {
  const { data } = props;

  return (
    <div className="movie-container">
      <Link to={`/movie/${data.imdbID}`}>
        <div className="Warp">
          <img src={data.Poster} alt={data.Title} />
        </div>
      </Link>
    </div>
  );
}

export default MovieListingHeader;
