import { Layout } from 'antd';
import AdminSidebar from './AdminSidebar';

function AdminPrograms() {
  const { Content } = Layout;
  return (
    <Layout>
      <AdminSidebar />
      <Content>
        <div id="programs-header">
          <h3>Programs</h3>
        </div>
      </Content>
    </Layout>
  );
}

export default AdminPrograms;
