import React from 'react';
import '../../styles/index.less';

import {Col, Row} from 'antd';
import ImageCard from '../Image/Image';
import {education,} from './education.module.less'

const Education = (data) => {
    const {img, university, title, years, gpa} = data;
    return (
        <div className={education}>
            <Row gutter={[8, 8]}>
                <Col xs={4} md={4} lg={3} xl={3}>
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
                        <h3>{university}</h3>
                    </Row>
                    <Row>
                        <h5>{title}</h5>
                    </Row>
                </Col>
                <Col xs={{span: 6, offset: 1}} xl={{span: 6, offset: 3}}>
                    <Row justify={"end"}>
                        <h4>{years}</h4>
                    </Row>
                    <Row justify={"end"}>
                        <h5>{gpa}</h5>
                    </Row>
                </Col>
            </Row>
        </div>

    )
};

export default Education;
