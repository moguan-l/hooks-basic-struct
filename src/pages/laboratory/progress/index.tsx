import React, { useContext } from 'react';
import { Row, Col, Progress as AntProgress, Button } from 'antd';
import { context } from '@/stores/laboratory';

export default function Progress(): JSX.Element {
  const { state, dispatch } = useContext(context);
  return (
    <>
      <Row>
        <Col span={8} offset={8}>
          <AntProgress percent={state.progress} />
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
