import React from 'react';

import '../../../styles/BookingStyles/AdvancedSearchModalStyles.less';

import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu, message, Space, Tooltip } from 'antd';

export function AdvancedSearchModal() {
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
    <div className="modal-window">
      <div className="h3-container">
        <h3>Filter By:</h3>
      </div>
      <br />
      <div className="filter-container">
        <Dropdown overlay={menu}>
          <Button>
            <Space>
              Example
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
        <Dropdown overlay={menu}>
          <Button>
            <Space>
              Example
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
        <Dropdown overlay={menu}>
          <Button>
            <Space>
              Example
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
        <Dropdown overlay={menu}>
          <Button>
            <Space>
              Example
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </div>
      <div className="topics-container">
        Topics:
        <div>
          <label>
            <input type="checkbox" name="html" value="html" checked /> HTML
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
    </div>
  );
}
