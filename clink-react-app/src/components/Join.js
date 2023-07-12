import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Join.scss';

const Join = () => {
  // 아이디 중복체크

  // 모든 칸 입력했는지 체크

  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [userId, setuserId] = useState('');
  const [nickname, setNickname] = useState('');
  const [pwd, setPwd] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');
  const [email, setEmail] = useState('');

  function handleSubmit(e) {
    // e.preventDefault();

    var param = {
      userName: userName,
      userId: userId,
      nickname: nickname,
      pwd: pwd,
      confirmPwd: confirmPwd,
      email: email,
    };

    axios
      .post('http://localhost:80/user/join.do', param)
      .then((response) => {
        // console.log(response);
        window.alert('회원가입 되었습니다. 로그인해주세요.');
        console.log(response.data);
        if (response.data === 'yes') {
          navigate('/login');
        }
        // 아닐 때 입력창 빈칸만들기?
      })
      .catch((error) => {
        console.log(error);
        window.alert('다시 시도해세요');
      });
  }

  // function handleSubmit(e) {
  //   // 회원가입
  //   e.preventDefault();
  //   console.log('전송');
  //   const form = e.target;
  //   const formData = new FormData(form);
  //   axios
  //     .post(baseUrl, formData)
  //     .then(function (response) {
  //       console.log('회원가입 성공:', response);
  //     })
  //     .catch(function (error) {
  //       console.error('회원가입 실패:', error);
  //     });
  // }

  return (
    <div className="JoinContainer">
      <div id="backgroundCircle"></div>
      <form action="join.do" method="post">
        <div className="JoinTitle">
          <h1>회원가입</h1>
        </div>
        <div className="JoinInputBox">
          <Form.Control
            name="name"
            placeholder="이름"
            className="joinInput"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <InputGroup className="joinInput">
            <Form.Control
              name="userId"
              placeholder="아이디"
              variant="outline-secondary"
              onChange={(e) => {
                setuserId(e.target.value);
              }}
            />
            <Button id="JoinIdentifyBtn">중복확인</Button>
          </InputGroup>
          <Form.Control
            name="nickname"
            placeholder="닉네임"
            className="joinInput"
            onChange={(e) => {
              setNickname(e.target.value);
            }}
          />
          <Form.Control
            type="password"
            name="password"
            placeholder="비밀번호"
            className="joinInput"
            onChange={(e) => {
              setPwd(e.target.value);
            }}
          />
          <Form.Control
            type="password"
            name="confirmPassword"
            placeholder="비밀번호 확인"
            className="joinInput"
            onChange={(e) => {
              setConfirmPwd(e.target.value);
            }}
          />
          {/* <Form.Control
            type="email"
            name="email"
            className="joinInput"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          /> */}
          <InputGroup className="joinInput">
            <Form.Control
              placeholder="이메일"
              type="email"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <Button variant="outline-secondary" id="JoinIdentifyBtn">
              본인인증하기
            </Button>
          </InputGroup>
        </div>
      </form>
      <div className="JoinBtnBox">
        <Button
          variant="primary"
          className="LoginSubmitBtn"
          type="submit"
          onClick={() => handleSubmit()}
        >
          회원가입하기
        </Button>
      </div>
      <div className="JoinLoginBtn">로그인</div>
    </div>
  );
};

export default Join;
