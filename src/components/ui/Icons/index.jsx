import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import "./styles.scss";

const Icons = () => {
  return (
    <nav className="icons">
      <a
        href="https://www.linkedin.com/in/savastep/"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://github.com/giraffesava" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://telegram.me/sava154" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faTelegram} />
      </a>
      <a href="mailto: savely54@mail.ru">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </nav>
  );
};

export default Icons;
