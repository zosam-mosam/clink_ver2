import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/FindId.scss';
import { Link } from 'react-router-dom';

const FindId = () => {
  return (
    <div className="FindIdContainer">
      <div className="FindIdBox">
        <div className="FindIdTitle">아이디찾기</div>
        <div className="FindIdForm">
          <form action="findId.do" method="post">
            <Form.Control
              type="text"
              id="inputPassword5"
              placeholder="아이디"
            />
            <Form.Control
              type="email"
              id="inputPassword5"
              placeholder="이메일"
            />
          </form>
        </div>
        <div className="FindIdBtnBox">
          <Link to="/findPwd">
            <Button
              variant="primary"
              className="FindIdSubmitBtn"
              id="FindIdGotoPwd"
              type="submit"
            >
              비밀번호 찾기
            </Button>
          </Link>
         
            <Button variant="primary" className="FindIdSubmitBtn" type="submit">
              아이디 찾기
            </Button>
         
        </div>
      </div>
    </div>
  );
};

export default FindId;
