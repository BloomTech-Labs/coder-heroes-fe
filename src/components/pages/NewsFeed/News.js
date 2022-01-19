import React from 'react';

export default function News() {
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
    <div>
      {newsfeed.map(news => {
        const { title, link, description, time } = news;
        console.log(link);
        return (
          <div>
            <a href={link}>
              <h1>{title}</h1>
            </a>

            <h3>{description}</h3>
            <h6>{time}</h6>
          </div>
        );
      })}
    </div>
  );
}
