import React, { useState } from 'react';
import Axios from 'axios';

export const InputForm = () => {
  const initialInputState = { profile_id: 0, message: '' };
  const [newMessage, setNewMessage] = useState(initialInputState);

  const { profile_id, message } = newMessage;

  const handleInputChange = e => {
    setNewMessage({ ...newMessage, [e.target.name]: e.target.value });
  };

  const sendMessage = e => {
    Axios({
      method: 'POST',
      url: 'http://localhost:3000/send',
      data: { profile_id, message },
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(res => {
      if (res.data.msg === 'successful') {
        console.log('Message has been sent');
        setNewMessage(initialInputState);
      } else {
        console.log('FAILURE');
      }
    });
  };

  return (
    <div>
      <form>
        <label>
          Profile ID
          <input
            name="name"
            onChange={handleInputChange}
            value={profile_id}
            placeholder="Input your ID here"
          ></input>
        </label>
        <label>Message</label>
        <input
          type="textarea"
          value={message}
          onChnage={handleInputChange}
          name="message"
          placeholder="Enter your message here"
        ></input>
        <button onClick={sendMessage}>Send</button>
      </form>
    </div>
  );
};
