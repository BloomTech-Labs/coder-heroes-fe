import React, { useEffect } from 'react';
import '../../../styles/index.less';
import IndividualNewsParent from './IndividualNewsParent';
import { connect } from 'react-redux';
import { getNewsFeedsParent } from '../../../redux/actions/parentActions';
import { Layout } from 'antd';
//TO-DO: Implement Auth0

function NewsContainer(props) {
  const { Content } = props;
  const { newsfeed, dispatch } = props;

  //TO-DO: Implement Auth0 - getNewsFeedParent
  useEffect(() => {
    dispatch(getNewsFeedsParent());
  }, [dispatch]);

  return (
    <Layout className="news-container">
      <IndividualNewsParent className="news-article" />
      <IndividualNewsParent
        className="
        news-article"
      />
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
    </Layout>
  );
}
const mapStateToProps = state => {
  return { newsfeed: state.parentReducer.newsfeed };
};
export default connect(mapStateToProps)(NewsContainer);
