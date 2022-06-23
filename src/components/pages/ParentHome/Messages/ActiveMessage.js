import React, { useEffect, useState } from 'react';
import ReplyEditor from './ReplyEditor';
import { Comment, Tooltip, List } from 'antd';
import 'antd/dist/antd.css';
import '../../../../styles/ParentStyles/index.less';
import '../../../../styles/ParentStyles/messages.less';
import moment from 'moment';
import { connect, useDispatch } from 'react-redux';
import { useOktaAuth } from '@okta/okta-react';

const data = [
  {
    actions: [<span key="comment-list-reply-to-0">Reply to</span>],
    author: 'Han Solo',
    avatar: 'https://joeschmoe.io/api/v1/random',
    content: (
      <p>
        We supply a series of design principles, practical patterns and high
        quality design resources (Sketch and Axure), to help people create their
        product prototypes beautifully and efficiently.
      </p>
    ),
    datetime: (
      <Tooltip
        title={moment()
          .subtract(1, 'days')
          .format('YYYY-MM-DD HH:mm:ss')}
      >
        <span>
          {moment()
            .subtract(1, 'days')
            .fromNow()}
        </span>
      </Tooltip>
    ),
  },
  {
    actions: [<span key="comment-list-reply-to-0">Reply to</span>],
    author: 'Han Solo',
    avatar: 'https://joeschmoe.io/api/v1/random',
    content: (
      <p>
        We supply a series of design principles, practical patterns and high
        quality design resources (Sketch and Axure), to help people create their
        product prototypes beautifully and efficiently.
      </p>
    ),
    datetime: (
      <Tooltip
        title={moment()
          .subtract(2, 'days')
          .format('YYYY-MM-DD HH:mm:ss')}
      >
        <span>
          {moment()
            .subtract(2, 'days')
            .fromNow()}
        </span>
      </Tooltip>
    ),
  },
];

function ActiveMessage(props) {
  const dispatch = useDispatch();
  const { authState, oktaAuth } = useOktaAuth();
  const [filteredConversations, setFilteredConversations] = useState([[]]);
  useEffect(() => {
    console.log(props);
    setFilteredConversations(
      props.conversations.filter(conversation => conversation.inbox_id === 0)
    );
  }, []);

  return (
    <div className="active-message">
      <h4>Conversation with: Teacher1</h4>
      <List
        className="message-thread"
        header={`${filteredConversations.length} replies`}
        itemLayout="horizontal"
        dataSource={filteredConversations}
        renderItem={item => (
          <li>
            <Comment
              actions={data[0].actions}
              author={item.sender_id}
              avatar="https://joeschmoe.io/api/v1/random"
              content={item.message}
              datetime={item.sent_at}
            />
          </li>
        )}
      />
      <ReplyEditor />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    conversations: state.parentReducer.messages,
    currentUser: state.userReducer.currentUser,
  };
};

export default connect(mapStateToProps)(ActiveMessage);
