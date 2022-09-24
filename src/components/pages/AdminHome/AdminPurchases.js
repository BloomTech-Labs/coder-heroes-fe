import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../../../utils/axiosWithAuth';
import AdminSidebar from './AdminSidebar';
import { Layout } from 'antd';
import PurchasesTable from './AdminPurchasesTable';
import '../../../styles/index.less';
//TO-DO: Implement Auth0

const PurchasesList = () => {
  const [purchases, setPurchases] = useState([
    {
      purchase_date: 20220816,
      parent_username: 'John Doe',
      seat_count: 2,
      program_name: 'CoderYoga',
      course_name: 'JavaScript for Beginners',
      payment_id: 'kdajsg!oei?tofg98netujn77v',
    },
  ]);

  // this is going out to an unspecified URL to gather the info - could be the backend, could be Stripe

  //TO-DO: Implement Auth0
  // useEffect(() => {
  //   axiosWithAuth()
  //     .get(`${URL}/admin-purchases`)
  //     .then(res => {
  //       setPurchases(res.data);
  //     })
  //     .catch(err => console.error(err));
  // }, []);

  const { Content } = Layout;

  return (
    <Layout>
      <AdminSidebar />

      <Content>
        <div class="table-container">
          <div class="header-container">
            <h1>Purchases</h1>
          </div>

          {/* Click to download and/or download button goes here when implemented */}
          <PurchasesTable purchases={purchases} />
        </div>
      </Content>
    </Layout>
  );
};
export default PurchasesList;
