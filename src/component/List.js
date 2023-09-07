import '../Home/Home.css'
import React, { useEffect, useState } from 'react';
import axios from 'axios';


function List() {

    const [data, setData] = useState([]);
    const params = {
        page: 1
      };

  useEffect(() => {
    // https://vercel-express-pied-kappa.vercel.app/qna?page=1
    // {params :{
    //   page: 1
    // }}
    axios.get(`https://vercel-express-pied-kappa.vercel.app/qna/${params.page}`
   )
      .then(response => {
        setData(response.data.data);
        console.log(response.data.data);
        
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  console.log(data.id);

  return (
    <div>
      <div className='list'>
        <div className='list-num'>{data.id}</div>
        <div className='list-title'>{data.title}</div>
        <div className='list-date'>{data.createdAt}</div>
        <div className='list-check'>{data.isDone}</div>
      </div>
    </div>
  )
}

export default List
