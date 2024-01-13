import React from "react";
import LogoIMG from "../../img/logo.png";
import "./Logo.css"

export default function Logo() {
  return (
    <div className="flexbox-container Logo">
      <img src={LogoIMG}></img>
      <h2>Forums</h2>
    </div>
  );
}
