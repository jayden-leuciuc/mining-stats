import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './NewsFeed.styles.scss';
import data from './NewsFeed.json';

const NewsFeed = () => {
  const [newsArray, setNewsArray] = useState([]);
  const { id } = useParams();
  const staticData = data.slice(0, 6);
  const options = {
    method: 'GET',
    url: 'https://free-news.p.rapidapi.com/v1/search',
    params: { q: id, lang: 'en' },
    headers: {
      'X-RapidAPI-Host': 'free-news.p.rapidapi.com',
      'X-RapidAPI-Key': '#',
    },
  };
  useEffect(() => {
    axios
      .request(options)
      .then((response) => {
        console.log(response.data.articles);
        setNewsArray(response.data.articles);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  {
    /* newsArray.map(newsArray => {
        <li key={newsArray.id}>
          <h1>{newsArray.title}</h1>
          <h1>{newsArray.author}</h1>
          <a href={newsArray.link}>{e.clean_url}</a>
          <img src={newsArray.media} alt='' />
          </li> 
      })  */
  }
  function truncate(str) {
    return str.length > 40 ? str.substring(0, 100) + '...' : str;
  }

  return (
    <div className='cryptoNews-container'>
      {staticData.map((x) => (
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
