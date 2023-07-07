import { ReactComponent as BlueInfo } from '../assets/BlueInfo.svg';
import { ReactComponent as BlueChall } from '../assets/BlueChall.svg';
import { ReactComponent as BlueCommu } from '../assets/BlueCommu.svg';
import { ReactComponent as BlueMain } from '../assets/BlueMain.svg';
import { ReactComponent as HoverChallenge } from '../assets/HoverChallenge.svg';
import { ReactComponent as HoverCommunity } from '../assets/HoverCommunity.svg';
import { ReactComponent as HoverInfo } from '../assets/HoverInfo.svg';
import { ReactComponent as HoverMain } from '../assets/HoverMain.svg';

import React, { useState } from 'react';
import '../styles/Footer.scss';

const Footer = () => {
  // const [state, setState] = useState({});

  function onClickHandler() {
    // setMain(!true);
  }

  return (
    <div className="FooterContainer">
      <div className="FooterBox">
        <BlueMain className="FooterMain" id="main" onClick={onClickHandler} />
        <HoverChallenge
          className="FooterMenu"
          id="challenge"
          onClick={onClickHandler}
        />
        <BlueCommu
          className="FooterMenu"
          id="community"
          onClick={onClickHandler}
        />
        <BlueInfo className="FooterMenu" id="info" onClick={onClickHandler} />
      </div>
    </div>
  );
};
// 이동 링크달기

export default Footer;
