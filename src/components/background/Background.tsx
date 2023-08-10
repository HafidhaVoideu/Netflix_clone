import React from "react";
import "./background.css";
import netflixImg from "../../assets/netflix-bg.avif";

type BackgroundProps = {
  children: React.ReactNode;
};

const Background = ({ children }: BackgroundProps) => {
  return (
    <div className="bg">
      <img className="bg__img" src={netflixImg} alt="movies-bg" />
      {children}
      <div className="bg__gradient" />
    </div>
  );
};

export default Background;
