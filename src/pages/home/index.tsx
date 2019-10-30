import React from 'react';
import { Link } from 'react-router-dom';
import { List, Row, Col } from 'antd';
import './index.scss';

interface LinkItem {
  name: string;
  link: string;
}

export default function Home(): JSX.Element {
  const laboratoryList: Array<LinkItem> = [
    {
      name: 'redux-progress',
      link: '/laboratory/progress'
    }
  ];

  const renderItem: (item: LinkItem) => JSX.Element = item => {
    return (
      <List.Item>
        <Link to={item.link}>{item.name}</Link>
      </List.Item>
    );
  };

  return (
    <div className="home">
      <Row>
        <Col span={8} offset={8}>
          <List
            header="Laboratory"
            bordered
            dataSource={laboratoryList}
            renderItem={renderItem}
          />
        </Col>
      </Row>
    </div>
  );
}
