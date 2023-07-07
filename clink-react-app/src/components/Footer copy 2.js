import React from 'react';
import main from '../assets/main.png';
import Realcommunity from '../assets/Realcommunity.png';
import RealChall from '../assets/RealChall.png';
import RealInfo from '../assets/RealInfo.png';
import RealMain from '../assets/RealMain.png';
import commnityActive from '../assets/commnityActive.png';
import { ReactComponent as MyInfo } from '../assets/MyInfo.svg';

import '../styles/Footer.scss';

// 이동 링크달기

const Footer = () => {
  return (
    <div className="FooterContainer">
      <div className="FooterBox">
        {/* <label> */}
        <MyInfo />
        {/* <img src={RealMain} alt="logo" width="65px" height="65px" /> */}
        <input type="radio" name="menu" value="main"></input>
        {/* <div className="FooterTitle">메인</div> */}
        {/* </label> */}
        <label>
          <img src={RealChall} alt="logo" width="65px" height="65px" />
          <input type="radio" name="menu" value="main" checked></input>
          {/* <div className="FooterTitle">챌린지</div> */}
        </label>
        <label>
          <img src={commnityActive} alt="logo" width="65px" height="65px" />
          <input type="radio" name="menu" value="main" checked></input>
          {/* <div className="FooterTitle">커뮤니티</div> */}
        </label>
        <label>
          <img src={RealInfo} alt="logo" width="65px" height="65px" />
          <input type="radio" name="menu" value="main" checked></input>
          {/* <div className="FooterTitle">내정보</div> */}
        </label>
      </div>
      {/* <div className="FooterBox" id="FooterMain">
        <img src={home} alt="logo" width="30px" height="30px" />
        <b>메인</b>
      </div>

      <div id="FooterChallenge" className="FooterBox">
        {' '}
        <img src={challenge} alt="logo" width="30px" height="30px" />
        <b>챌린지</b>
      </div>
      <div id="FooterCommunity" className="FooterBox">
        {' '}
        <img src={community} alt="logo" width="30px" height="30px" />
        <b>커뮤니티</b>
      </div>
      <div id="FooterMyinfo" className="FooterBox">
        {' '}
        <img src={Person} alt="logo" width="30px" height="30px" />
        <b>내정보</b>
      </div> */}
    </div>
  );
};

export default Footer;
