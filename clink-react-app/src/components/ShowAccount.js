import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import '../styles/ShowAccount.scss';

const ShowAccount = () => {
  return (
    <div className="addAccount">
      <div className="addAccountConsumptionBox">
        <div className="addAccountLeftBox">
          <div className="addAccountTitle">소비 계좌</div>
          <button className="addAccountEditBtn">수정</button>
        </div>
        <div className="addAccountRightBox">
          <button className="addAccountAddBtn">+ 새 계좌 등록</button>
        </div>
      </div>
    </div>
  );
};

export default ShowAccount;
