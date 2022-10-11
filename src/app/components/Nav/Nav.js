import React, { useEffect, useState } from "react";

import Logo from "../../../assets/netflix-logo.png";
import Avatar from "../../../assets/avatar.jpg";
import "./Nav.scss";

function Nav() {
  const [show, setShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img className="nav__logo" src={Logo} alt="Logo" />
        <img className="nav__avatar" src={Avatar} alt=""></img>
      </div>
    </div>
  );
}

export default Nav;
