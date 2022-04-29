import React from "react";
import logo from "../images/logo.png";

export default function Header() {
  return (
    <div className="header">
      <img alt="world icon" src={logo} />
      <p>my travel journal.</p>
    </div>
  );
}
