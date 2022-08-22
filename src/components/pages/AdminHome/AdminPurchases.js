import React, { useState, useEffect } from 'react';
import '../../../styles/index.less';
import { useOktaAuth } from '@okta/okta-react';
import axiosWithAuth from '../../../utils/axiosWithAuth';
import AdminSidebar from './AdminSidebar';
import { Layout } from 'antd';
import PurchasesTable from './AdminPurchasesTable';
import '../../../styles/index.less';
// import { DownloadOutlined } from '@ant-design/icons';

const PurchasesList = () => {
  const { authState } = useOktaAuth();
  const { idToken } = authState;
  const [purchases, setPurchases] = useState([
    {
      purchase_date: 20220816,
      parent_username: 'John Doe',
      seat_count: 2,
      program_name: 'CoderYoga',
      course_name: 'JavaScript for Beginners',
      payment_id: 'kdajsg!oei?tofg98netujn77v',
    },
    {
      purchase_date: 20220818,
      parent_username: 'Jane Smith',
      seat_count: 1,
      program_name: 'CoderCamp',
      course_name: 'HTML How-To',
      payment_id: 'kdajsg!oei?tofg98netujn77v',
    },
    {
      purchase_date: 20220815,
      parent_username: 'Mark Hankinson',
      seat_count: 3,
      program_name: 'CoderSitters',
      course_name: 'CSS Is Fun!',
      payment_id: 'kdajsg!oei?tofg98netujn77v',
    },
    {
      purchase_date: 20220710,
      parent_username: 'Jane Smith',
      seat_count: 1,
      program_name: 'CoderYoga',
      course_name: 'JavaScript for Beginners',
      payment_id: 'kdajsg!oei?tofg98netujn77v',
    },
    {
      purchase_date: 20220630,
      parent_username: 'Mabel Foster',
      seat_count: 1,
      program_name: 'CoderCamp',
      course_name: 'HTML and Me!',
      payment_id: 'kdajsg!oei?tofg98netujn77v',
    },
    {
      purchase_date: 20220813,
      parent_username: 'Joe Plumber',
      seat_count: 1,
      program_name: 'CoderSitters',
      course_name: 'CSS for Kids',
      payment_id: 'kdajsg!oei?tofg98netujn77v',
    },
    {
      purchase_date: 20220820,
      parent_username: 'Beyonce Knowles',
      seat_count: 1,
      program_name: 'CoderYoga',
      course_name: 'HTML to the Oldies',
      payment_id: 'kdajsg!oei?tofg98netujn77v',
    },
    {
      purchase_date: 20220822,
      parent_username: 'Martha Stewart',
      seat_count: 3,
      program_name: 'CoderYoga',
      course_name: 'HTML for Fun',
      payment_id: 'kdajsg!oei?tofg98netujn77v',
    },
    {
      purchase_date: 20220807,
      parent_username: 'Erica Graham',
      seat_count: 1,
      program_name: 'CoderYoga',
      course_name: 'HTML to the Oldies',
      payment_id: 'kdajsg!oei?tofg98netujn77v',
    },
    {
      purchase_date: 20220809,
      parent_username: 'Mark Zuckerberg',
      seat_count: 2,
      program_name: 'CoderCamp',
      course_name: 'CSS Is Fun!',
      payment_id: 'kdajsg!oei?tofg98netujn77v',
    },
    {
      purchase_date: 20220811,
      parent_username: 'Steve Jobs',
      seat_count: 1,
      program_name: 'CoderCamp',
      course_name: 'JavaScript for Beginners',
      payment_id: 'kdajsg!oei?tofg98netujn77v',
    },
  ]);

  useEffect(() => {
    axiosWithAuth(idToken)
      .get(`${URL}/admin-purchases`)
      .then(res => {
        setPurchases(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  const { Content } = Layout;

  return (
    <Layout>
      <AdminSidebar />

      <Content>
        <div class="table-container">
          <div class="header-container">
            <h1>Purchases</h1>
          </div>

          {/* <div className="right"><DownloadOutlined /> Click to download</div> */}

          <div></div>
          <PurchasesTable purchases={purchases} />
        </div>
      </Content>
    </Layout>
  );
};
export default PurchasesList;
