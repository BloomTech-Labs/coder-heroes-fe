import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import '../../../styles/BookingStyles/SingleCourseBookingStyles.less';
import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, Menu } from 'antd';

export function SingleCourseBookingComponent() {
  // menu -> this is what gets passed to the dropdown, it is what is listed out in the dropdown.
  // You can add to the dropdown list by adding another object inside of "items", the "label" keys value is what will be shown.
  // Right now the menu items are hard-coded, someone that works on this in the future can either dynamically render the information or simply add other menu variables to pass the dropdowns.

  const courseMenu = (
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
      ]}
    />
  );

  const filterMenu = (
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

  const registerMenu = (
    <Menu
      items={[
        {
          label: '1st example',
          key: '1',
        },
      ]}
    />
  );

  return (
    // Dropdown and Button are from ant design
    // DownOutlined is the down arrow on the dropdowns, also from ant design

    <div className="content-container">
      <div className="heading-container">
        <div className="button-container">
          <button>Back</button>
        </div>
        <div className="title-container">
          <h1>BOOK NOW</h1>
        </div>
      </div>
      <div className="course-card">
        <p>You Are Registering For:</p>
        <Dropdown overlay={courseMenu}>
          <Button>
            Course
            <DownOutlined />
          </Button>
        </Dropdown>
      </div>
      <div className="filter-card">
        <div className="h3-container">
          <h3>Filter By:</h3>
        </div>
        <br />

        <div className="filter-container">
          <Dropdown overlay={filterMenu}>
            <Button>
              Available Seats
              <DownOutlined />
            </Button>
          </Dropdown>
          <Dropdown overlay={filterMenu}>
            <Button>
              Instructor
              <DownOutlined />
            </Button>
          </Dropdown>
          <Dropdown overlay={filterMenu}>
            <Button>
              Session Type
              <DownOutlined />
            </Button>
          </Dropdown>
          <Dropdown overlay={filterMenu}>
            <Button>
              Age Group
              <DownOutlined />
            </Button>
          </Dropdown>
        </div>
      </div>
      <div className="register-card">
        <div className="register-title">Registration:</div>
        <div className="register-columns">
          <div className="register-list">
            <Dropdown overlay={registerMenu}>
              <Button>
                Number of Seats
                <DownOutlined />
              </Button>
            </Dropdown>
            <Dropdown overlay={registerMenu}>
              <Button>
                Available Dates
                <DownOutlined />
              </Button>
            </Dropdown>
          </div>
          <br />
          <div className="times-card">
            <h3>Available Times:</h3>
            <div className="checkbox">
              <label>
                <input type="checkbox" name="1pm" value="1pm" /> 1pm
              </label>

              <label>
                <input type="checkbox" name="2pm" value="2pm" /> 2pm
              </label>

              <label>
                <input type="checkbox" name="3pm" value="3pm" />
                3pm
              </label>

              <label>
                <input type="checkbox" name="4pm" value="4pm" /> 4pm
              </label>
            </div>
          </div>
        </div>
      </div>
      <Link to="/parent/cart">
        <button className="submit-button">Continue Registration</button>
      </Link>
    </div>
  );
}
