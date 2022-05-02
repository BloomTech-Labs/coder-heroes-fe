import React from 'react';

import ParentFamilyHome from '../ParentFamily/ParentFamilyHome';
import { Layout, Row, Col } from 'antd';
import 'antd/dist/antd.css';
import Banner from '../../common/Banner';
import ParentSidebar from './ParentSidebar';
import './../../../styles/ParentStyles/index.less';

function ParentHome() {
  const { Content } = Layout;

  return (
    <div className="App">
      <Layout>
        <ParentSidebar active="family" />
        <Content>
          <Banner />
          <Layout>
            <Content>
              <Row justify="space-around" align="middle">
                <Col span={20}>
                  <ParentFamilyHome />
                </Col>
              </Row>
            </Content>
          </Layout>
        </Content>
      </Layout>
    </div>
  );
}

export default ParentHome;
