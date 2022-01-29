import React from 'react';
import '../../../styles/index.less';
import IndividualNewsParent from './IndividualNewsParent';

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
    <div>
      <div className="news-container">
        {newsfeed.map(news => {
          const { title, link, description, id } = news;
          return (
            <IndividualNewsParent
              key={id}
              title={title}
              link={link}
              description={description}
              newsfeed_id={id}
            />
          );
        })}
      </div>
    </div>
  );
}
