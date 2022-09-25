import React from 'react';

import {Col, Row} from 'antd';
import ImageCard from '../Image/Image';
import {experience,} from './experience.module.less'

const Experience = (data) => {
    const {img, company, title, years} = data;
    return (
        <div className={experience}>
            <Row gutter={[8, 8]}>
                <Col xs={5} md={4} lg={3} xl={3}>
                    <div>
                        <ImageCard
                            alt={''}
                            image={img}
                            imageStyle={{
                                height: 60,
                                width: 60
                            }}/>
                    </div>
                </Col>
                <Col xs={8} md={10} lg={12}>
                    <Row>
                        <h3>{company}</h3>
                    </Row>
                    <Row>
                        <h5>{title}</h5>
                    </Row>
                </Col>
                <Col xs={{span: 6, offset: 1}} xl={{span: 6, offset: 3}}>
                    <Row justify={'end'}>
                        <h5>{years}</h5>
                    </Row>
                </Col>
            </Row>
        </div>
    )
};

export default Experience;
