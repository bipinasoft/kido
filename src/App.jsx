import React from 'react';
import { Layout, Menu, Typography } from 'antd';
import Home from './pages/Home';

const { Header, Content, Footer } = Layout;

export default function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header>
        <div style={{ color: '#fff', fontSize: '20px' }}>Kids English Learning</div>
        <Menu theme="dark" mode="horizontal" items={[
          { key: '1', label: 'Home' },
          { key: '2', label: 'Games' },
          { key: '3', label: 'Lessons' }
        ]} />
      </Header>
      <Content style={{ padding: '20px' }}>
        <Home />
      </Content>
      <Footer style={{ textAlign: 'center' }}>© 2025 Kids English Learning</Footer>
    </Layout>
  );
}
