import React from 'react';

import '../../../styles/BookingStyles/AdvancedSearchModalStyles.less';

import { DownOutlined, CloseOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu } from 'antd';

//toggleModal is passed in as props from CourseDescriptionComponent.js

export function AdvancedSearchModal({ toggleModal }) {
  // Filter dropdown options that get passed to <Dropdown/>
  const menu = (
    <Menu
      items={[
        {
          label: '1st example',
          key: '1',
        },
        {
          label: '2nd example',
          key: '2',
        },
        {
          label: '3rd example',
          key: '3',
        },
      ]}
    />
  );

  return (
    //CloseOutlined is the X icon in the modal close button
    //DownOutlined is the down arrow in the dropdown boxes

    <div className="modal-window">
      <button className="modal-close-button" onClick={toggleModal}>
        <CloseOutlined style={{ color: 'white' }} />
      </button>

      <div className="h3-container">
        <h3>Filter By:</h3>
      </div>
      <br />
      <div className="filter-container">
        <Dropdown overlay={menu}>
          <Button>
            Instructor
            <DownOutlined />
          </Button>
        </Dropdown>
        <Dropdown overlay={menu}>
          <Button>
            Session Type
            <DownOutlined />
          </Button>
        </Dropdown>
        <Dropdown overlay={menu}>
          <Button>
            Age Group
            <DownOutlined />
          </Button>
        </Dropdown>
        <Dropdown overlay={menu}>
          <Button>
            Level
            <DownOutlined />
          </Button>
        </Dropdown>
      </div>
      <div className="topics-container">
        <div className="topics-title">Topics:</div>
        <div className="topics-list">
          <label>
            <input type="checkbox" name="html" value="html" /> HTML
          </label>
          <br />
          <label>
            <input type="checkbox" name="css" value="css" /> CSS
          </label>
          <br />
          <label>
            <input type="checkbox" name="javascript" value="javascript" />{' '}
            Javascript
          </label>
          <br />
          <label>
            <input type="checkbox" name="csharp" value="csharp" /> C#
          </label>
          <br />
        </div>
      </div>
      <button className="submit-button">Submit</button>
    </div>
  );
}
