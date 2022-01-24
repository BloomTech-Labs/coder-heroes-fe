import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../../styles/index.less';

export default function NewsContainer({ setPostOptions }) {
  const [newsfeed, setNewsFeed] = useState([]);
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('okta-token-storage'));
    const config = {
      headers: { Authorization: `Bearer ${token.idToken.value}` },
    };
    axios
      .get('https://coder-heroes-api.herokuapp.com/news', config)
      .then(resp => {
        setNewsFeed(resp.data);
      })
      .catch(err => {
        console.log('error fetching axios call');
      });
  }, []);
  return (
    <div className="news-container">
      {newsfeed.map(news => {
        const { title, link, description, newsfeed_id } = news;
        return (
          <div className="news-card" key={newsfeed_id}>
            <div className="title-container">
              <h1>{title} </h1>
            </div>
            <div className="description">
              <h3>{description}</h3>
            </div>
            <div className="button-container">
              <a href={link}>Link</a>
              <button
                className="edit-button"
                onClick={() => {
                  setPostOptions('editDelete');
                }}
              >
                Edit/Delete Post
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
