import React, { useState } from 'react';
import main from '../assets/main.png';
import chall from '../assets/chall.png';
import commu from '../assets/commu.png';
import info from '../assets/info.png';
import login from '../assets/login.png';

import clickMain from '../assets/clickMain.png';
import clickChaa from '../assets/clickChaa.png';
import ClickCommu from '../assets/ClickCommu.png';
import clickInfo from '../assets/clickInfo.png';

import '../styles/Footer.scss';
const resources = [
  {
    src: main,
    resrc: clickMain,
    select: true,
  },
  {
    src: chall,
    resrc: clickChaa,
    select: false,
  },
  {
    src: commu,
    resrc: ClickCommu,
    select: false,
  },
  {
    src: login,
    resrc: clickInfo,
    select: false,
  },
];
const Footer = () => {
  const [image, setImage] = useState(resources);

  const imageHandler = (src) => {
    setImage(
      image.map((item) =>
        item.src === src
          ? { ...item, select: true }
          : { ...item, select: false },
      ),
    );
  };

  return (
    <div className="FooterContainer">
      <div className="FooterBox">
        <img
          src={image[0].select === false ? image[0].src : image[0].resrc}
          alt="logo"
          width="75px"
          height="75px"
          onClick={() => {
            imageHandler(image[0].src);
          }}
        ></img>
        <img
          src={image[1].select === false ? image[1].src : image[1].resrc}
          alt="logo"
          width="75px"
          height="75px"
          onClick={() => {
            imageHandler(image[1].src);
          }}
        ></img>
        <img
          src={image[2].select === false ? image[2].src : image[2].resrc}
          alt="logo"
          width="75px"
          height="75px"
          onClick={() => {
            imageHandler(image[2].src);
          }}
        ></img>
        <img
          src={image[3].select === false ? image[3].src : image[3].resrc}
          alt="logo"
          width="75px"
          height="75px"
          onClick={() => {
            imageHandler(image[3].src);
          }}
        ></img>
      </div>
    </div>
  );
};
// 이동 링크달기

export default Footer;
