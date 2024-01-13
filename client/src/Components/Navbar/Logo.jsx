import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoIMG from "../../img/logo.png";
import "./Logo.css"

export default function Logo() {
  const navigate = useNavigate()

  return (
      <Link to="/">
    <div className="flexbox-container Logo">
      <img src={LogoIMG}></img>
      <h2>Forums</h2>
    </div>
      </Link>
  );
}
