import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AddAccount.scss";
import { Link } from "react-router-dom";
import AccountNum from "./AccountNum";

const AddAccount = () => {
  const [change, setChange] = useState(false);

  function addAccountHandler() {
    setChange(true);
  }

  return (
    <div className="addAccount">
      <div className="addAccountConsumptionBox">
        <div className="addAccountLeftBox">
          <div className="addAccountTitle">저축 계좌</div>
          <button className="addAccountEditBtn">수정</button>
        </div>
        <div className="addAccountRightBox">
          <button className="addAccountAddBtn">
            {change ? (
              <AccountNum />
            ) : (
              <Link
                to="/add-account-form"
                style={{ textDecoration: "none" }}
                onClick={addAccountHandler}
              >
                + 새 계좌 등록
              </Link>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddAccount;
