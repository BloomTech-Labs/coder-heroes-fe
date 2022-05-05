import React from 'react';
import Banner from '../../common/Banner';
import ParentSidebar from '../ParentHome/ParentSidebar';
import ParentNavbar from './ParentNavbar';
import StudentDropdown from './StudentDropdown';
import '../../../styles/ParentStyles/index.less';
import { Layout, Card, Empty } from 'antd';
import 'antd/dist/antd.css';
import { Space, Card } from 'antd';
import { MailOutlined } from '@ant-design/icons';

const ParentResourcesPage = () => {
  const { Content } = Layout;
  return (
    <Layout>
      <ParentSidebar active="Resources" />
      <Content>
        <Banner />
        <div className="navDrop">
          <ParentNavbar />
          <StudentDropdown />
        </div>
        <div className="cardContainer">
          <Card className="resourceCard">
            <img
              className="artImg"
              src="https://edsurge.imgix.net/uploads/post/image/12917/DevTech_Research_Group_Family_Coding_Day_EdSurge-1576078551.jpg?auto=compress%2Cformat&w=1600&h=648&fit=crop"
              alt="Michael and his mother Sasha work with a facilitator at Family Coding Day to program the KIBO robot by scanning the wooden programming blocks."
            />
            <a href="https://www.edsurge.com/news/2019-12-11-parents-don-t-need-to-be-coding-experts-just-willing-to-learn-with-their-children">
              Parents Don't Need to Be Coding Experts, Just Willing to Learn
              With Their Children
            </a>
          </Card>
          <Card className="resourceCard">
            <Empty />
          </Card>
        </div>
      </Content>
    </Layout>
  );
};

export default ParentResourcesPage;
