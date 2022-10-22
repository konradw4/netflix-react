import React, { useEffect, useState } from "react";

import Logo from "../../../assets/netflix-logo.png";
import Avatar from "../../../assets/avatar.jpg";
import "./Nav.scss";
import { useNavigate } from "react-router-dom";

function Nav() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

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
        <img
          onClick={() => navigate("/")}
          className="nav__logo"
          src={Logo}
          alt="Logo"
        />
        <img
          onClick={() => navigate("/profile")}
          className="nav__avatar"
          src={Avatar}
          alt=""
        ></img>
      </div>
    </div>
  );
}

export default Nav;
