import React from 'react'
import { useState } from 'react';
import { navigate, useNavigate } from 'react-router-dom'
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  const handleSign =() => {
    navigate('/signup');
  }

  const handleInputId = (e) => {
    setInputId(e.target.value); // react input 입력값 가져오기.
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const handleLogin = () => {
    axios
      .post("https://vercel-express-pied-kappa.vercel.app/users/signin", {
        email: inputId,
        password: inputPw,
      })
      .then((res) => {
        console.log(inputId);
        console.log(inputPw);
        console.log(res.data);
        if (res.data.token) {
          //setToken(res.data.token); 토큰 로컬스토리지에 저장할것
          localStorage.setItem('accessToken', res.data.token); //키값 , value
          console.log(res.data.token);
          alert('로그인 성공 !');
          navigate("/home");
        }
      })
      .catch((error) => {
        console.log(error, "error");
      });
  };


  return (
    <div>
    <div className='out-box'>
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
      <form>
        <label htmlFor="input_pw">PW : </label>
        <input
          type="password"
          name="input_pw"
          value={inputPw}
          onChange={handleInputPw}
        />
      </form>
      <div className='button'>
        <button type='submit' onClick={handleLogin}>로그인</button>
      </div>
      <div className='button'>
        <button type='submit' onClick={handleSign}>회원가입</button>
      </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Login
