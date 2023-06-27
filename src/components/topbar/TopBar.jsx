import { LogoItem, PicWrapper, Slink, Wrapper } from "./stylesTopBar";

import Logo from "../../assets/png/android-chrome-192x192.png";
import React from "react";

const TopBar = () => {
  return (
    <Wrapper>
      <Slink to={"/"}>
        <LogoItem>
          <img src={Logo} alt="logo" />
          <span>Free images & videos</span>
        </LogoItem>
      </Slink>

      <PicWrapper>
        <Slink to={"pictures"}>
          <button>IMAGES</button>
        </Slink>
        <Slink to={"videos"}>
          <button>VIDEOS</button>
        </Slink>
      </PicWrapper>
    </Wrapper>
  );
};

export default TopBar;
