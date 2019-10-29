import React, { useContext } from 'react';
import { Row, Col, Progress, Button } from 'antd';
import { appContext } from '../store';

export default function Home(): JSX.Element {
  const { state, dispatch } = useContext(appContext);
  return (
    <>
      <Row>
        <Col span={8} offset={8}>
          <Progress percent={state.progress} />
        </Col>
      </Row>
      <Row>
        <Col span={8} offset={8}>
          <Button.Group>
            <Button type="primary" onClick={() => dispatch({ type: 'decrease' })}>减少</Button>
            <Button type="primary" onClick={() => dispatch({ type: 'increase' })}>增加</Button>
          </Button.Group>
        </Col>
      </Row>
    </>
  );
}
