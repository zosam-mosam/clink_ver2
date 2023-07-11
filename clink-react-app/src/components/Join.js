import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import '../styles/Join.scss';

const handleSubmit = (event) => {
  event.preventDefault();
};
function joinHandler(){
    console.log("전송");
}

const Join = () => {
  return (
    <div className="JoinContainer">
      <div id="backgroundCircle"></div>
      <form action='join.do' method='post' onSubmit={handleSubmit}>
        <div className="JoinTitle">
          <h1>회원가입</h1>
        </div>
        <div className="JoinInputBox">
          <Form.Control
            type="text"
            name="name"
            placeholder="이름"
            className="joinInput"
          />
           <InputGroup className="joinInput">
            <Form.Control
              name="id" placeholder="아이디"   
            />
            <Button variant="outline-secondary" id="JoinIdentifyBtn"
            >
              중복확인
            </Button>
          </InputGroup>
          <Form.Control
            type="text"
            name="nickname"
            placeholder="닉네임"
            className="joinInput"
          />{' '}
          <Form.Control
            type="password"
            name="password"
            placeholder="비밀번호"
            className="joinInput"
          />
          <Form.Control
            type="password"
            name="confirmPassword"
            placeholder="비밀번호 확인"
            className="joinInput"
          />
          <Form.Control
            type="email"
            name="email"
            placeholder="이메일"
            className="joinInput"
          />
          <InputGroup className="joinInput">
            <Form.Control
              placeholder="휴대폰 본인인증"  
            />
            <Button variant="outline-secondary" id="JoinIdentifyBtn"
            >
              본인인증하기
            </Button>
          </InputGroup>
        </div>
      </form>
      <div className="JoinBtnBox">
        <Button variant="primary" className="LoginSubmitBtn" type="submit" onClick={joinHandler}>
          회원가입하기
        </Button>
      </div>
      <div className='JoinLoginBtn'>로그인</div>
    </div>
  );
};

export default Join;
