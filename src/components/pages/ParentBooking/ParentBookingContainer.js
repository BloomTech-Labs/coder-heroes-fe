// WE ARE CURRENTLY TRYING OUT THE SingleBookingComponent.js PLEASE REFER TO THAT COMPONENT FOR BOOKING FOR NOW

import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import { connect } from 'react-redux';
import { Tabs } from 'antd';
import ParentBookingCard from './ParentBookingCard';
import LoadingComponent from '../../common/LoadingComponent';
import { isDateInThisWeek } from '../../common/dateHelpers';

const tabs = [{ title: 'All' }, { title: 'Today' }, { title: 'This Week' }];

const ParentBookingContainer = props => {
  const { TabPane } = Tabs;
  const { bookings, isFetching, error } = props.bookings;
  const [currentTab, setCurrentTab] = useState(null);

  useEffect(() => {
    // when the component mounts, trigger action fetchParentBookings to get the list of bookings
    setCurrentTab(bookings);
  }, []); // eslint-disable-line

  const renderTab = key => {
    if (key === '0') {
      setCurrentTab(bookings);
    }

    if (key === '1') {
      let arr = bookings.filter(item => {
        const todayObj = new Date();
        const today = todayObj.toISOString().substring(0, 10);
        const startDate = item.start_date.substring(0, 10);
        return startDate === today;
      });
      setCurrentTab(arr);
    }

    if (key === '2') {
      const arr = bookings.filter(item => {
        const date = item.start_date;
        return isDateInThisWeek(date);
      });
      setCurrentTab(arr);
    }
  };

  return (
    <div>
      {error ? (
        <div>{error}</div>
      ) : isFetching ? (
        <LoadingComponent message="Loading Bookings List..." />
      ) : (
        <Tabs animated="true" tabPosition="top" onChange={renderTab} centered>
          {tabs.map((item, index) => (
            <TabPane tab={item.title} key={index} className="tab_container">
              {currentTab &&
                currentTab.map((item, idx) => {
                  return (
                    <div>
                      <ParentBookingCard key={idx} booking={item} />
                    </div>
                  );
                })}
            </TabPane>
          ))}
          <TabPane tab="My Courses" key="3">
            My Courses
          </TabPane>
        </Tabs>
      )}
    </div>
  );
};

const mapStateToProps = state => ({ bookings: state.parentReducer.bookings });

export default connect(mapStateToProps)(ParentBookingContainer);
