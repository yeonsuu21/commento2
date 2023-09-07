import '../Home/Home.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function List() {

    const [data, setData] = useState([]);
    // const params = {
    //     page: 1
    //   };

  useEffect(() => {
    // https://vercel-express-pied-kappa.vercel.app/qna?page=1
    axios.get("https://vercel-express-pied-kappa.vercel.app/qna${params}",
    {params :{
        page: 1
      }})
      .then(response => {
        setData(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <div className='list'>
        <div className='list-num'>1</div>
        <div className='list-title'>이건 뭘까요</div>
        <div className='list-date'>2023-06-08</div>
        <div className='list-check'>답변완료</div>
      </div>
    </div>
  )
}

export default List
