import React from "react";
import Slider from "react-slick";
import { Settings } from "../../common/setting";
import { useSelector } from "react-redux";
import {
  getAllMovies,
  getAllShows,
  getAllEpisode,
  getAllHeaders,
} from "../../features/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import MovieListingHeader from "./MovieListingHeader";
import "./MovieListing.scss";
const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  const episodes = useSelector(getAllEpisode);
  const topMovie = useSelector(getAllHeaders);
  let renderMovies,
    renderShows,
    renderEpisodes,
    renderMovieListingHeader = "";

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((show, index) => <MovieCard key={index} data={show} />)
    ) : (
      <div className="show-error">
        <h3>{shows.Error}</h3>
      </div>
    );

  renderEpisodes =
    episodes.Response === "True" ? (
      episodes.Search.map((episode, index) => (
        <MovieCard key={index} data={episode} />
      ))
    ) : (
      <div className="episode-error">
        <h3>{episodes.Error}</h3>
      </div>
    );

  renderMovieListingHeader =
    topMovie.Response === "True" ? (
      topMovie.Search.map((show, index) => (
        <MovieListingHeader key={index} data={show} />
      ))
    ) : (
      <div className="show-error">
        <h3>{topMovie.Error}</h3>
      </div>
    );
  return (
    <div className="movie-wrapper">
      <div className="movie-container">
        <Slider {...settings}> {renderMovieListingHeader}</Slider>
      </div>
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          <Slider {...Settings}>{renderMovies}</Slider>
        </div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">
          <Slider {...Settings}>{renderShows}</Slider>
        </div>
      </div>
      <div className="episode-list">
        <h2>Episode</h2>
        <div className="episode-container">
          <Slider {...Settings}>{renderEpisodes}</Slider>
        </div>
      </div>
    </div>
  );
};

export default MovieListing;
