import React, { useEffect } from 'react';
import axios from 'axios';
import '../Home/Home.css';
import List from '../component/List';

function Home() {

  // const sendAccessToken = (token) => {
  //   axios
  //     .get("https://vercel-express-pied-kappa.vercel.app/users", 
  //     {headers: {
  //       Authorization: `Bearer ${token}`, // 엑세스 토큰을 헤더에 포함
  //     }},
  //     )
  //     .then((res) => {
  //       console.log(res.data);
  //       alert('엑세스토큰 전달!');
  //     })
  //     .catch((error) => {
  //       console.log(error, "error");
  //     });
  // };

  // useEffect(() => {
  //   // 엑세스 토큰을 로컬 스토리지에서 가져오기
  //   const token = localStorage.getItem('accessToken');

  //   // 엑세스 토큰이 있다면 서버에 보내기
  //   if (token) {
  //     sendAccessToken(token);
  //   }
  // }, []);
  
  return (
    <div>
      <div className='title'>QnA List</div>
      <div className='category'>
        <div className='no'>No</div>
        <div className='name'>제목</div>
        <div className='date'>생성일</div>
        <div className='check'>답변완료 여부</div>
      </div>
      <List></List>
    </div>
  )
}

export default Home
