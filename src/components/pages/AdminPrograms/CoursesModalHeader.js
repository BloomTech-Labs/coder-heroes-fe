import React, { useState } from 'react';
import { Drawer, Checkbox } from 'antd';

function ModalHeader() {
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  function handleSubmit(evt) {
    evt.preventDefault();
  }

  return (
    <div id="modal-header">
      <h3>Pending</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search..." />
      </form>
      <button onClick={openDrawer}>Filter</button>
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
