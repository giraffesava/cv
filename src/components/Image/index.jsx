import React from "react";
import myImage from "./../../assets/img/myImage.jpeg";
import "./styles.scss";

const Image = () => {
  return <img src={myImage} className="image" alt="Me" />;
};

export default Image;
