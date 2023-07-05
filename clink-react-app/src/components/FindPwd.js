import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../styles/FindPwd.scss';

const FindPwd = () => {
  return (
    <div className="FindPwdContainer">
      <div className="FindPwdBox">
        <div className="FindPwdTitle">비밀번호찾기</div>
        <div className="FindPwdForm">
          <form action="findPwd.do" method="post">
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
        <div className="FindPwdBtnBox">
          <Button
            variant="primary"
            className="FindPwdSubmitBtn"
            id="FindPwdGotoId"
            type="submit"
          >
            아이디 찾기
            {/*href 주소 달기 */}
          </Button>{' '}
          <Button variant="primary" className="FindPwdSubmitBtn" type="submit">
            비밀번호 찾기
          </Button>{' '}
        </div>
      </div>
    </div>
  );
};

export default FindPwd;
