import React from 'react';
import { Layout, Card } from 'antd';
import 'antd/dist/antd.css';
import StudentSidebar from './StudentSidebar';
import Banner from '../../common/Banner';
import '../../../styles/ParentStyles/index.less';

function StudentPortfolio() {
  const { Content } = Layout;
  return (
    <Layout>
      <StudentSidebar />
      <Content>
        <Banner />
        <div className="cardContainer">
          <Card className="portfolioCard">
            <a href="https://www.edsurge.com/news/2019-12-11-parents-don-t-need-to-be-coding-experts-just-willing-to-learn-with-their-children">
              <h3>Writing - Technology Matters</h3>
              <img
                className="artImg"
                src="https://edsurge.imgix.net/uploads/post/image/12917/DevTech_Research_Group_Family_Coding_Day_EdSurge-1576078551.jpg?auto=compress%2Cformat&w=1600&h=648&fit=crop"
                alt="Michael and his mother Sasha work with a facilitator at Family Coding Day to program the KIBO robot by scanning the wooden programming blocks."
              />
              <p>
                Parents Don't Need to Be Coding Experts, Just Willing to Learn
                With Their Children
              </p>
            </a>
          </Card>
          <Card className="portfolioCard">
            <a href="https://www.edsurge.com/news/2019-12-11-parents-don-t-need-to-be-coding-experts-just-willing-to-learn-with-their-children">
              <h3>Writing - Technology Matters</h3>
              <img
                className="artImg"
                src="https://edsurge.imgix.net/uploads/post/image/12917/DevTech_Research_Group_Family_Coding_Day_EdSurge-1576078551.jpg?auto=compress%2Cformat&w=1600&h=648&fit=crop"
                alt="Michael and his mother Sasha work with a facilitator at Family Coding Day to program the KIBO robot by scanning the wooden programming blocks."
              />
              <p>
                Parents Don't Need to Be Coding Experts, Just Willing to Learn
                With Their Children
              </p>
            </a>
          </Card>
          <Card className="portfolioCard">
            <a href="https://www.edsurge.com/news/2019-12-11-parents-don-t-need-to-be-coding-experts-just-willing-to-learn-with-their-children">
              <h3>Writing - Technology Matters</h3>
              <img
                className="artImg"
                src="https://edsurge.imgix.net/uploads/post/image/12917/DevTech_Research_Group_Family_Coding_Day_EdSurge-1576078551.jpg?auto=compress%2Cformat&w=1600&h=648&fit=crop"
                alt="Michael and his mother Sasha work with a facilitator at Family Coding Day to program the KIBO robot by scanning the wooden programming blocks."
              />
              <p>
                Parents Don't Need to Be Coding Experts, Just Willing to Learn
                With Their Children
              </p>
            </a>
          </Card>
          <Card className="portfolioCard">
            <a href="https://www.edsurge.com/news/2019-12-11-parents-don-t-need-to-be-coding-experts-just-willing-to-learn-with-their-children">
              <h3>Writing - Technology Matters</h3>
              <img
                className="artImg"
                src="https://edsurge.imgix.net/uploads/post/image/12917/DevTech_Research_Group_Family_Coding_Day_EdSurge-1576078551.jpg?auto=compress%2Cformat&w=1600&h=648&fit=crop"
                alt="Michael and his mother Sasha work with a facilitator at Family Coding Day to program the KIBO robot by scanning the wooden programming blocks."
              />
              <p>
                Parents Don't Need to Be Coding Experts, Just Willing to Learn
                With Their Children
              </p>
            </a>
          </Card>
        </div>
      </Content>
    </Layout>
  );
}

export default StudentPortfolio;
