import React from 'react';
import { Link } from 'react-router-dom';
import account from '../assets/account.png';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/AddAccountForm.scss';

const AddAccountForm = () => {
  return (
    <div className="AddAccountForm">
      <div className="AddAccountFormImage">
        <img src={account} alt="logo" />
      </div>
      <div className="AddAccountFormBox">
        <div className="AddAccountFormTitle">계좌추가</div>
        <div className="AddAccountFormForm">
          <form action="findId.do" method="post">
            <Form.Select aria-label="Default select example">
              <option>은행을 선택하세요</option>
              <option value="088">신한</option>
              <option value="222">우리</option>
              <option value="333">국민</option>
              <option value="444">기업</option>
              <option value="555">농협</option>
              {/* erd보고 바꾸기(코드는 3자리) */}
            </Form.Select>
            <br />
            <Form.Control
              type="text"
              id="inputPassword5"
              placeholder="계좌번호 ( '-' 제외)"
            />
          </form>
        </div>
        <div className="AddAccountFormBtnBox">
          <Link to="/mypage">
            <Button
              variant="primary"
              className="AddAccountFormSubmitBtn"
              type="submit"
            >
              확인
            </Button>
          </Link>

          {/* 계좌번호 중복확인 검사 */}
        </div>
      </div>
    </div>
  );
};

export default AddAccountForm;
