import React from 'react';
import pig from '../assets/pig.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddAccount from './AddAccount';
import '../styles/MyPage.scss';
import ShowAccount from './ShowAccount';

const MyPage = () => {
  return (
    <div className="MyPageContainer">
      <div className="MyPageTitle"> 
    마이페이지</div>
      <div className="MyPageProfileBox">
        <img src={pig} alt="logo" /> &nbsp; &nbsp; &nbsp;
        <Button className="MyPageProfileBtn">프로필 사진 변경</Button> &nbsp;
        <Button className="MyPageChoiceBtn">선택</Button>
      </div>
      <div className="MyPageAccounttitle">계좌등록</div>
      <AddAccount className="MyPageAddAccount" />
      <ShowAccount className="MyPageAddAccount" />
      <div className="MyPageInfotitle">개인정보 수정</div>
      <div className="MyPageInfoBox">
        <Form.Control
          type="text"
          name="id"
          placeholder="아이디"
          className="joinInput"
        />
        <Form.Control
          type="text"
          name="nickname"
          placeholder="닉네임"
          className="joinInput"
        />
        <Form.Control
          type="text"
          name="name"
          placeholder="이름"
          className="joinInput"
        />
        <Form.Control
          type="text"
          name="address"
          placeholder="주소"
          className="joinInput"
        />
        <Form.Control
          type="password"
          name="password"
          placeholder="비밀번호"
          className="joinInput"
        />
        <Form.Control
          type="password"
          name="passwordConfirm"
          placeholder="비밀번호 확인"
          className="joinInput"
        /><br />
      </div>
      <div className="MyPageBtnBox">
        <Button>수정</Button>
        <br />
        <br />
        <div>Logout</div>
        <br />
      </div>
    </div>
  );
};

export default MyPage;
