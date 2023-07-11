import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import pig from '../assets/pig.png';
import '../styles/Login.scss';
import { Link } from 'react-router-dom';

const handleSubmit = (event) => {
  event.preventDefault();
};
// function loginHandler(){
//     console.log("idpwd전송");
// }
const Login = () => {
  return (
    <div className="LoginContainer">
      <div className="LoginImage">
        <img src={pig} alt="logo" />
      </div>
      <div className="LoginTitle">
        <h2>로그인</h2>
      </div>
      <form action="login.do" method="post" onSubmit={handleSubmit}>
        <div className="LoginForm">
          <Form.Control type="text" id="inputPassword5" placeholder="아이디" />
          <Form.Control
            type="password"
            id="inputPassword5"
            placeholder="비밀번호"
          />
        </div>
      </form>
      <div className="joinNfindBox">
        <button className="LoginJoinBtn">
          <Link to="/join">회원가입</Link>
        </button>
        <button className="LoginFindBtn">
          <Link to="/findId">아이디/비밀번호 찾기</Link>
        </button>
      </div>
      <div className="LoginButtonBox">
        <Button variant="primary" className="LoginSubmitBtn" type="submit">
          로그인하기
        </Button>
      </div>
    </div>
  );
};

export default Login;
