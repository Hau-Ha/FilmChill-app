import React, { useState } from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.png";
import logo from "../../images/FILMCHILL-logos_white.png";
import HomeIcon from "../../images/home-icon.svg";
import Shows from "../../images/series-icon.svg";
import movie from "../../images/movie-icon.svg";
import "./Header.scss";
import { useDispatch } from "react-redux";

import {
  fetchAsyncMovies,
  fetchAsyncShows,
  fetchAsyncEpisode,
} from "../../features/movies/movieSlice";
const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (term === "") return alert("Please enter search key");
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    dispatch(fetchAsyncEpisode(term));
    setTerm("");
  };

  return (
    <div className="header">
      <div className="logo">
        <div onClick="window.location.reload();">
          <Link to="/" onClick="window.location.reload();">
            <img className="logoA" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="Home">
          <div onClick="window.location.reload();">
            <Link to="/">
              <img className="HomeIcon" src={HomeIcon} alt="HomeIcon" />
              <span>Home</span>
            </Link>
          </div>
          <Link to="">
            <img className="HomeIcon" src={Shows} alt="Shows" />
            <span>Shows</span>
          </Link>
          <Link to="">
            <img className="HomeIcon" src={movie} alt="movie" />
            <span>movie</span>
          </Link>
        </div>
      </div>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Search"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
