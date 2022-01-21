import React from 'react';
import '../../../styles/index.less';

export default function NewsContainer() {
  const newsfeed = [
    {
      id: '1',
      title: 'first',
      link: 'news-feed',
      description: 'this is a description',
      time: '12:21',
    },
    {
      id: '2',
      title: 'second',
      link: 'news-feed',
      description: 'this is a  second',
      time: '12:22',
    },
    {
      id: '3',
      title: 'third',
      link: 'news-feed',
      description: 'this is a third',
      time: '12:23',
    },
    {
      id: '4',
      title: 'fourth',
      link: 'news-feed',
      description: 'this is a fourth',
      time: '12:24',
    },
  ];
  return (
    <div className="news-container">
      {newsfeed.map(news => {
        const { title, link, description, id } = news;
        return (
          <div className="news-card" key={id}>
            <div className="title-container">
              <h1>{title} title</h1>
            </div>
            <div className="description">
              <h3>{description}</h3>
            </div>
            <div className="button-container">
              <a href={link}>Link</a>
              <button className="edit-button">Edit/Delete Post</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
