import React from 'react';
import { Link } from 'react-router-dom';
import { List, Row, Col } from 'antd';

interface laboratoryItem {
  name: string;
  link: string;
}

const laboratoryList: Array<laboratoryItem> = [
  {
    name: 'redux-progress',
    link: '/laboratory/progress'
  }
]

export default function Index(): JSX.Element {
  const renderItem: (item: laboratoryItem) => JSX.Element = (item) => {
    return (
      <List.Item>
        <Link to={item.link}>{item.name}</Link>
      </List.Item>
    )
  }

  return (
    <Row>
      <Col span={8} offset={8}>
        <List
        header="Laboratory"
        dataSource={laboratoryList}
        renderItem={renderItem}
        />
      </Col>
    </Row>
  );
}
