import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import '../styles/AddAccount.scss';

const AddAccount = () => {
  return (
    <div className="addAccount">
      <div className="addAccountConsumptionBox">
        <div className="addAccountLeftBox">
          <div className="addAccountTitle">저축 계좌</div>
          <button className="addAccountEditBtn">수정</button>/
          <button className="addAccountEditBtn" id="addAccountAddBtn">
            등록
          </button>
          <button className="addAccountEditBtn" id="addAccountAddBtn"></button>
        </div>
        <div className="addAccountRightBox">
          <button className="addAccountAddBtn">+ 새 계좌 등록</button>
        </div>
      </div>
    </div>
  );
};

export default AddAccount;
