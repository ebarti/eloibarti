import React from 'react';

import { Col, Row } from 'antd';
import ImageCard from '../Image/Image';

const Experience = (data) => {
  const { img, company, title, years} = data;
  return (
    <Row gutter={[8,8]}>
      <Col xs={4} md={4} lg={3} xl={3}>
        <div>
            <ImageCard
            alt={''}
            image={img}
            imageStyle={{
              height:60,
              width:60
            }}/>
        </div>
      </Col>
      <Col xs={8} md={10} lg={12}>
        <Row>
          <h3>{company}</h3>
        </Row>
        <Row>
          <h4>{title}</h4>
        </Row>
      </Col>
      <Col xs={{ span: 6, offset: 1}} xl={{span: 6, offset: 3}}>
        <h4>{years}</h4>
      </Col>
    </Row>
  )
};

export default Experience;
