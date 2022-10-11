import React, { useEffect, useState } from "react";

import "./Banner.scss";
import axios from "../../../api/axios";
import { requests, movieImgURL } from "../../../api/request";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const request = await axios.get(requests.fetchNetflixOriginals);
    setMovie(
      request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
      ]
    );
    return request;
  };

  const truncate = (string, n) =>
    string?.length > n ? string.substr(0, n - 1) + "..." : string;

  const bannerStyle = {
    backgroundSize: "cover",
    backgroundImage: `url(${movieImgURL}/${movie?.backdrop_path})`,
    backgroundPosition: "canter canter",
  };

  return (
    <header className="banner" style={bannerStyle}>
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <p className="banner__description">{truncate(movie?.overview, 150)}</p>
      </div>

      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
