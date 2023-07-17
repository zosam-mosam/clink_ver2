import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Join.scss';
import { Link } from 'react-router-dom';

const Join = () => {
  // 모든 칸 입력했는지 체크(예정)

  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [userId, setuserId] = useState('');
  const [nickname, setNickname] = useState('');
  const [pwd, setPwd] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');
  const [email, setEmail] = useState('');

  // 아이디 중복체크
  function checkDuplicateId() {
    let id = { userId: userId };
    axios
      .post('http://localhost:80/clink/user/check-duplicate-id.do', id)
      .then((response) => {
        console.log(response.data);
        if (response.data === 'success') {
          alert('사용할 수 있는 아이디입니다.');
        } else if (response.data === 'fail') {
          alert('사용 중인 아이디입니다.');
          setuserId('');
        }
        // 아닐 때 입력창 빈칸만들기?
      })
      .catch((error) => {
        console.log(error);
        alert('다시 시도하세요');
      });
  }

  // 회원가입
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
      .post('http://localhost:80/clink/user/join.do', param)
      .then((response) => {
        console.log(response.data);
        if (response.data) {
          alert('회원가입 되었습니다. 로그인해주세요.');
          navigate('/');
        } else {
          alert('다시 시도하세요');
        }
        // 아닐 때 입력창 빈칸만들기?
      })
      .catch((error) => {
        console.log(error);
        alert('다시 시도하세요');
      });
  }
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
              value={userId}
            />
            <Button id="JoinIdentifyBtn" onClick={() => checkDuplicateId()}>
              중복확인
            </Button>
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
