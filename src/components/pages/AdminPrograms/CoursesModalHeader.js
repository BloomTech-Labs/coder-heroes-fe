import React, { useState } from 'react';
import { Drawer, Checkbox, Button } from 'antd';
import { FilterOutlined, SearchOutlined } from '@ant-design/icons';

function ModalHeader() {
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  function handleSubmit(evt) {
    evt.preventDefault();
  }

  return (
    <div id="modal-header">
      <h3 className="modal-header-title">Pending</h3>
      <form class="courses-search-form" onSubmit={handleSubmit}>
        <Button
          id="filter-button"
          size={'large'}
          icon={<FilterOutlined />}
          onClick={openDrawer}
          block={true}
        >
          Filter
        </Button>
        <input
          className="courses-search-bar"
          type="text"
          placeholder="Search..."
        />
        <button id="courses-search-button">
          <SearchOutlined />
        </button>
      </form>
      <div id="modal-button-holder"></div>
      <Drawer
        title="Filters"
        placement={'left'}
        closeable={'true'}
        onClose={onClose}
        visible={open}
      >
        <Checkbox>
          <p>Check One</p>
        </Checkbox>
        <Checkbox>
          <p>Check Two</p>
        </Checkbox>
      </Drawer>
    </div>
  );
}

export default ModalHeader;
