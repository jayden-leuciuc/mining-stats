import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './NewsFeed.styles.scss';
import data from './NewsFeed.json';

const NewsFeed = () => {
  const [newsArray, setNewsArray] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const { id } = useParams();
  const staticData = data.slice(0, 6);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/coinNews/${id}`)
      .then((res) => {
        console.log(res.data);
        setNewsArray(res.data.articles);
        setIsFetching(false);
      })
      .catch((err) => {
        // handle error
        console.log(err);
      });
  }, []);
  function truncate(str) {
    return str.length > 40 ? str.substring(0, 100) + '...' : str;
  }

  return (
    <div className='cryptoNews-container'>
      {newsArray.map((x) => (
        <div key={x.key} className='newsitem-container'>
          <div className='text-container'>
            <p className='newsitem-title'>{x.title}</p>
            <p>{truncate(x.summary)}</p>
            <p>{x.clean_url}</p>
          </div>
          <div className='image-container'>
            <img src={x.media} alt='' className='newsimage' />
          </div>
        </div>
      ))}
    </div>
  );
};
export default NewsFeed;
