import React from 'react'
import { useState } from 'react';
import { navigate, useNavigate } from 'react-router-dom'
import axios from "axios";
import '../Signup/Signup.css'

function Signup() {

const navigate = useNavigate();
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   const handleSign =() => {
//     navigate('/signup');
//   }

  const handleInputId = (e) => {
    setInputId(e.target.value); // react input 입력값 가져오기.
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const handleSign = () => {
    axios
      .post("https://vercel-express-pied-kappa.vercel.app/users/signup", {
        email: inputId,
        password: inputPw,
      })
      .then((res) => {
        console.log(inputId);
        console.log(inputPw);
        console.log(res.data);
        alert('회원가입이 성공적으로 이루어졌습니다!');
        navigate("/");
      })
      .catch((error) => {
        console.log(error, "error");
      });
  };
  

  return (
    <div>
      <div>
    <div className='out-box'>
        회원가입
      <div className='inner-box'>
      <div className='login-box'>
      <div>
        <label htmlFor="input_id">ID : </label>
        <input
          type="text"
          name="input_id"
          value={inputId}
          onChange={handleInputId}
        />
      </div>
      <div>
        <label htmlFor="input_pw">PW : </label>
        <input
          type="password"
          name="input_pw"
          value={inputPw}
          onChange={handleInputPw}
        />
      </div>
    
      <div className='button'>
        <button type='submit' onClick={handleSign}>회원가입</button>
      </div>
      </div>
      </div>
    </div>
    </div>
    {/* {isPopupOpen && ( // 팝업이 열려 있을 때만 렌더링
        <div className='popup'>
          <p>회원가입이 성공적으로 이루어졌습니다!</p>
          <button onClick={() => setIsPopupOpen(false)}>닫기</button>
        </div>
      )} */}
    </div>
  )
}

export default Signup
