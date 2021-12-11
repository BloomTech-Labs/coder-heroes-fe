import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { Card } from 'antd';
import { connect } from 'react-redux';
import { Tabs } from 'antd';
import ParentBookingCard from './ParentBookingCard';
import LoadingComponent from '../../common/LoadingComponent';

function isDateInThisWeek(date) {
  const todayObj = new Date();
  const todayDate = todayObj.getDate();
  const todayDay = todayObj.getDay();

  const firstDayOfWeek = new Date(todayObj.setDate(todayDate - todayDay));
  const lastDayOfWeek = new Date(firstDayOfWeek);
  lastDayOfWeek.setDate(lastDayOfWeek.getDate() + 6);

  return firstDayOfWeek <= new Date(date) && new Date(date) <= lastDayOfWeek;
}

const tabs = [{ title: 'All' }, { title: 'Today' }, { title: 'This Week' }];

const ParenBookingContainer = props => {
  const { TabPane } = Tabs;
  const { bookings, isFetching, error } = props.bookings;
  const [currentTab, SetcurrentTab] = useState(null);

  useEffect(() => {
    // when the component mounts, trigger action fetchParentBookings to get the list of bookings
    SetcurrentTab(bookings);
  }, []);

  const renderTab = key => {
    if (key === '0') {
      SetcurrentTab(bookings);
    }

    if (key === '1') {
      let arr = bookings.filter(item => {
        const todayObj = new Date();
        const today = todayObj.toISOString().substring(0, 10);
        const startDate = item.start_date.substring(0, 10);
        return startDate === today;
      });
      SetcurrentTab(arr);
    }

    if (key === '2') {
      const arr = bookings.filter(item => {
        const date = item.start_date;
        return isDateInThisWeek(date);
      });
      SetcurrentTab(arr);
    }
  };

  return (
    <div>
      <div className="header"></div>
      {error ? (
        <div>{error}</div>
      ) : isFetching ? (
        <LoadingComponent message="Loading Bookings List..." />
      ) : (
        <Tabs animated="true" tabPosition="top" onChange={renderTab}>
          {tabs.map((item, index) => (
            <TabPane tab={item.title} key={index}>
              <Card.Grid hoverable="False" className="flex">
                {currentTab &&
                  currentTab.map((item, idx) => {
                    return <ParentBookingCard key={idx} booking={item} />;
                  })}
              </Card.Grid>
            </TabPane>
          ))}
          <TabPane tab="1:1 Sessions" key="3">
            1:1 Sessions
          </TabPane>
        </Tabs>
      )}
    </div>
  );
};

const mapStateToProps = state => ({ bookings: state.parentReducer.bookings });

export default connect(mapStateToProps)(ParenBookingContainer);
