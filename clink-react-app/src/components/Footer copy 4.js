import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import {
  faHouse,
  faComments,
  faTrophy,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import '../styles/Footer.scss';

const Footer = () => {
  return (
    <nav className="wrapper">
      <div>
        <Link to="/Main" className="nav-link">
          <FontAwesomeIcon icon={faHouse} />
        </Link>
      </div>{' '}
      {/* 네비게이션을 구성하고 있는 하나의 버튼 */}
      <div>
        <Link to="/Community" className="nav-link">
          <FontAwesomeIcon icon={faComments} />
        </Link>
      </div>
      <div>
        <Link to="/Challenge" className="nav-link">
          <FontAwesomeIcon icon={faTrophy} />
        </Link>
      </div>
      <div>
        <Link to="/MyInfo" className="nav-link">
          <FontAwesomeIcon icon={faUser} />
        </Link>
      </div>
    </nav>
  );
};
// 이동 링크달기

export default Footer;
