import React from "react";

import "./Banner.scss";

const bannerStyle = {
  backgroundSize: "cover",
  backgroundColor: "#111",
  backgroundPosition: "canter canter",
};

function Banner() {
  const truncate = (string, n) =>
    string?.length > n ? string.substr(0, n - 1) + "..." : string;

  return (
    <header className="banner" style={bannerStyle}>
      <div className="banner__contents">
        <h1 className="banner__title">Movie name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <p className="banner__description">
          {truncate(
            "test description test descriptiontest description test descriptiontest description test descriptiontest description test descriptiontest description test descriptiontest description test descriptiontest description test descriptiontest description test descriptiontest description test descriptiontest description test descriptiontest description test descriptiontest description test descriptiontest description test descriptiontest description test descriptiontest description test descriptiontest description test description",
            150
          )}
        </p>
      </div>

      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
