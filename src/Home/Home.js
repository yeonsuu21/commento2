import React, { useEffect } from 'react';
import axios from 'axios';




  // const sendAccessToken = (accessToken) => {
  //   // 서버에 엑세스 토큰을 포함한 요청 보내기
  //   fetch('your-api-endpoint', {
  //     method: 'GET', // GET 또는 필요한 HTTP 메서드 사용
  //     headers: {
  //       Authorization: `Bearer ${accessToken}`, // 엑세스 토큰을 헤더에 포함
  //     },
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     // 서버 응답 처리
  //     console.log(data);
  //   })
  //   .catch(error => {
  //     // 오류 처리
  //     console.error(error);
  //   });
  // };





function Home() {

  const sendAccessToken = (token) => {
    axios
      .get("https://vercel-express-pied-kappa.vercel.app/users", 
      {headers: {
        Authorization: `Bearer ${token}`, // 엑세스 토큰을 헤더에 포함
      }},
      )
      .then((res) => {
        console.log(res.data);
        alert('엑세스토큰 전달!');
      })
      .catch((error) => {
        console.log(error, "error");
      });
  };

  useEffect(() => {
    // 엑세스 토큰을 로컬 스토리지에서 가져오기
    const token = localStorage.getItem('accessToken');

    // 엑세스 토큰이 있다면 서버에 보내기
    if (token) {
      sendAccessToken(token);
    }
  }, []);
  
  return (
    <div className='slider'></div>
  )
}

export default Home
