import React, { Component } from "react";
import cards from "../../../server/card";
import "./Header.css"

const Header = () => {
  return (
    <div className="header">
      <h1>Operating System</h1>
      <h3>Computer Science</h3>
      <h4 className="info">{`We have total of ${cards.length} questions`}</h4>    
    </div>
  )
};

export default Header;

