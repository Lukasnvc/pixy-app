import { Slink, Wrapper } from "./stylesFooter";

import { BsGithub } from "react-icons/bs";
import React from "react";

const Footer = () => {
  return (
    <Wrapper>
      <div>
        <p>Api: pixabay</p>
        <p>Made with: React, TS</p>
      </div>
      <Slink to="https://github.com/Lukasnvc/pic-app.git" target="blank">
        <BsGithub />
      </Slink>
      <div>
        <p>Made by: Lukas</p>
        <p>2023</p>
      </div>
    </Wrapper>
  );
};

export default Footer;