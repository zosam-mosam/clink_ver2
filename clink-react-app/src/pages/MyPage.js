import React, { useEffect, useState } from 'react';
import AddAccount from '../components/AddAccount';
import ShowAccount from '../components/ShowAccount';
import pig from '../assets/pig.png';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/MyPage.scss';


const MyPage = () => {
  const [userInfo, setUserInfo] = useState(0);

  // useEffect(() => {
  //   axios
  //     .get('http://localhost:80/clink/user/auth.do')
  //     .then((response) => {
  //       console.log(response.data);
  //       setUserInfo(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  return (
    <div className="MyPageContainer" style={{ paddingBottom: '20%' }}>
      <div className="MyPageTitle">마이페이지</div>
      {/* {userInfo == 1 ? ( */}
      <>
        <div className="MyPageProfileBox">
          <img src={pig} alt="logo" /> &nbsp; &nbsp; &nbsp;
          <Button className="MyPageProfileBtn">프로필 사진 변경</Button>
          &nbsp;
          <Button className="MyPageChoiceBtn">선택</Button>
        </div>
        <div className="MyPageAccounttitle">계좌등록</div>
        <AddAccount className="MyPageAddAccount" />
        <ShowAccount className="MyPageAddAccount" />
        <div className="MyPageInfotitle">개인정보 수정</div>
        <div className="MyPageInfoBox">
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
          />
          <br />
        </div>
        <div className="MyPageBtnBox">
          <Button>수정</Button>
          <br />
          <br />
          <div>
            <b>Logout</b>
          </div>
          <br />
        </div>
      </>
      {/* ) : (
        <p>세션 정보가 없습니다</p>
      )} */}
    </div>
  );
};

export default MyPage;
