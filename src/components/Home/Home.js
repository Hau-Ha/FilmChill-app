import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
  fetchAsyncHeader,
} from "../../features/movies/movieSlice";

import "./Home.scss";
const Home = () => {
  const dispatch = useDispatch();
  const movieText = "star wars";
  const showText = "money";
  const episodeText = "game";
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
    dispatch(fetchAsyncHeader(episodeText));
  }, [dispatch]);
  return (
    <div className="Container">
      <MovieListing />
    </div>
  );
};

export default Home;
