import React from "react";

import Nav from "../Nav/Nav";
import Avatar from "../../../assets/avatar.jpg";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/userSlice";
import { auth } from "../../../firebase.config";
import "./ProfileScreen.scss";

function ProfileScreen() {
  const user = useSelector(selectUser);

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img src={Avatar} alt="" />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__details">
              <h3>Plans</h3>
              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
