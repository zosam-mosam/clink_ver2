import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import account from '../assets/account.png';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/AddAccountForm.scss';

const AddAccountForm = () => {
  const navigate = useNavigate();
  const [accountNum, setAccountNum] = useState('');
  const [accountType, setAccountType] = useState('');

  function AddAccountHandler() {
    let param = {
      accountNum: accountNum,
      userId: sessionStorage.getItem('userId'),
      accountType: accountType,
    };
    axios
      .post('http://localhost:80/clink/user/registAccount.do', param)
      .then((response) => {
        console.log(response.data);
        //   if (response.data === 'success') {
        //     alert('사용할 수 있는 아이디입니다.');
        //   } else if (response.data === 'fail') {
        //     alert('사용 중인 아이디입니다.');
        //     setuserId('');
        //   }

        navigate('/mypage');
        // 아닐 때 입력창 빈칸만들기
      })
      .catch((error) => {
        console.log(error);
        alert('계좌가 정상적으로 등록되지 않았습니다.');
      });
  }

  return (
    <div className="AddAccountForm">
      <div className="AddAccountFormImage">
        <img src={account} alt="logo" />
      </div>
      <div className="AddAccountFormBox">
        <div className="AddAccountFormTitle">계좌추가</div>
        <div className="AddAccountFormForm">
          <form action="registAccount.do" method="post">
            <Form.Select
              aria-label="Default select example"
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
            >
              <option>은행을 선택하세요</option>
              <option value="088">신한</option>
              <option value="111">우리</option>
              <option value="222">국민</option>
              <option value="333">기업</option>
              <option value="444">농협</option>
              {/* erd보고 바꾸기(코드는 3자리) */}
            </Form.Select>
            <br />
            <Form.Control
              type="text"
              id="inputPassword5"
              name="accountNum"
              placeholder="계좌번호 ( '-' 제외)"
              onChange={(e) => {
                setAccountNum(e.target.value);
              }}
              //   value={accountNum}
            />
          </form>
        </div>
        <div className="AddAccountFormBtnBox">
          <Button
            onClick={() => AddAccountHandler()}
            variant="primary"
            className="AddAccountFormSubmitBtn"
            type="submit"
          >
            확인
          </Button>

          {/* 계좌번호 중복확인 검사 */}
        </div>
      </div>
    </div>
  );
};

export default AddAccountForm;
