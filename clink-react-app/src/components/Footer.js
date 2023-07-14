import React, { useState } from "react";
// import main from '../../public/images/main.png';
// import chall from '../../public/images/chall.png';
// import commu from '../../public/images/commu.png';
// import info from '../../public/images/info.png';

// import clickMain from '../../public/images/clickMain.png';
// import clickChaa from '../../public/images/clickChaa.png';
// import ClickCommu from '../../public/images/ClickCommu.png';
// import clickInfo from '../../public/images/clickInfo.png';

import "./Footer.css";
import { NavLink, Outlet } from "react-router-dom";
const resources = [
  {
    src: "/images/main.png",
    resrc: "/images/clickMain.png",
    select: true,
  },
  {
    src: "/images/chall.png",
    resrc: "/images/clickChaa.png",
    select: false,
  },
  {
    src: "/images/commu.png",
    resrc: "/images/ClickCommu.png",
    select: false,
  },
  {
    src: "/images/myinfo.png",
    resrc: "/images/clickInfo.png",
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
          : { ...item, select: false }
      )
    );
  };

  return (
    <>
      <Outlet />
      <div className="FooterContainer">
        <div className="FooterBox">
          <div className="FooterIcon">
            <NavLink to="/Main">
              <img
                src={image[0].select === false ? image[0].src : image[0].resrc}
                // src={image[0].src}
                alt="logo"
                // width="75px"
                // height="75px"
                onClick={() => {
                  imageHandler(image[0].src);
                }}
              ></img>
            </NavLink>
          </div>
          <div className="FooterIcon">
            <NavLink to="/challenge">
              <img
                src={image[1].select === false ? image[1].src : image[1].resrc}
                alt="logo"
                // width="75px"
                // height="75px"
                onClick={() => {
                  imageHandler(image[1].src);
                }}
              ></img>
            </NavLink>
          </div>
          <div className="FooterIcon">
            <NavLink to="/community">
              <img
                src={image[2].select === false ? image[2].src : image[2].resrc}
                // src={image[2].src}
                alt="logo"
                // width="75px"
                // height="75px"
                onClick={() => {
                  imageHandler(image[2].src);
                }}
              ></img>
            </NavLink>
          </div>
          <div className="FooterIcon">
            <NavLink to="/mypage">
              <img
                src={image[3].select === false ? image[3].src : image[3].resrc}
                alt="logo"
                // width="75px"
                // height="75px"
                onClick={() => {
                  imageHandler(image[3].src);
                }}
              ></img>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
// 이동 링크달기

export default Footer;
