import info from '../assets/info.png';
import commu from '../assets/commu.png';
import main from '../assets/main.png';
import chall from '../assets/chall.png';

import clickChaa from '../assets/clickChaa.png';
import clickInfo from '../assets/clickInfo.png';
import clickMain from '../assets/clickMain.png';
import ClickCommu from '../assets/ClickCommu.png';

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
        {/* <img src={main} alt="logo" width="75px" height="75px"></img>
        <img src={commu} alt="logo" width="75px" height="75px"></img>
        <img src={chall} alt="logo" width="75px" height="75px"></img> */}
        <img src={info} alt="logo" width="75px" height="75px"></img> 
        <img src={clickMain} alt="logo" width="75px" height="75px"></img>
        <img src={clickChaa} alt="logo" width="75px" height="75px"></img>
        <img src={ClickCommu} alt="logo" width="75px" height="75px"></img>
        {/* <img src={clickInfo} alt="logo" width="75px" height="75px"></img> */}
      </div>
    </div>
  );
};
// 이동 링크달기

export default Footer;
