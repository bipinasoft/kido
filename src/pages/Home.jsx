import React from 'react';
import { Card, Row, Col, Typography } from 'antd';

const { Title } = Typography;

export default function Home() {
  const topics = [
    { title: 'Alphabet', description: 'Learn A-Z with fun pictures' },
    { title: 'Numbers', description: 'Count from 1 to 100 easily' },
    { title: 'Colors', description: 'Identify colors around you' }
  ];

  return (
    <div>
      <Title level={2}>Welcome to Kids English Learning</Title>
      <Row gutter={[16, 16]}>
        {topics.map((topic, idx) => (
          <Col xs={24} md={8} key={idx}>
            <Card title={topic.title} bordered hoverable>
              {topic.description}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
