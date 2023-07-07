import React, { useState } from 'react';
import { ReactComponent as BlueInfo } from '../assets/BlueInfo.svg';
import { ReactComponent as BlueChall } from '../assets/BlueChall.svg';
import { ReactComponent as BlueCommu } from '../assets/BlueCommu.svg';
import { ReactComponent as BlueMain } from '../assets/BlueMain.svg';
import { ReactComponent as HoverChallenge } from '../assets/HoverChallenge.svg';
import { ReactComponent as HoverCommunity } from '../assets/HoverCommunity.svg';
import { ReactComponent as HoverInfo } from '../assets/HoverInfo.svg';
import { ReactComponent as HoverMain } from '../assets/HoverMain.svg';

import '../styles/Footer.scss';

const Footer = () => {
  const [state, setState] = useState({
    
  });

  function menuHandler() {
    setMain(!true);
  }

  return (
    <div className="FooterContainer">
      <div className="FooterBox">
        {main == 'true' ? (
          <BlueMain className="FooterMain" id="main" onClick={menuHandler} />
        ) : (
          <HoverMain className="FooterMain" id="main" onClick={menuHandler} />
        )}
        <BlueChall className="FooterMenu" id="challenge" />
        <BlueCommu className="FooterMenu" id="community" />
        <BlueInfo className="FooterMenu" id="info" />
      </div>
    </div>
  );
};
// 이동 링크달기

export default Footer;
