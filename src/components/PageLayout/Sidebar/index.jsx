// eslint-disable-next-line import/no-extraneous-dependencies
import {globalHistory} from '@reach/router';
import {Affix, Col, Layout, Row,} from 'antd';
import FeatherIcon from 'feather-icons-react';
import React from 'react';
import FA from 'react-fontawesome';

import Config from '../../../../config';
import useWindowSize from '../../../utils/hooks';
import {
    background,
    badge,
    badgeGray,
    boxContent,
    boxName,
    contactBlockItem,
    content,
    name,
    profileAvatar,
    sideBar404Radius,
    sidebarContent,
} from './sidebar.module.less';

const {Content} = Layout;
const {
    github, stackoverflow,
} = Config.social;

const DomContent = () => (
    <aside>
        <div className={profileAvatar}/>
        <div className={`${name} centerAlign`}>
            <div className={`${boxName} centerAlign`}>
                <h2>
                    Eloi
                    {' '}
                    <span>Barti</span>
                </h2>
            </div>
            <div className={`${badge} ${badgeGray}`}>Platform Security Lead Engineer</div>
            <div className="centerAlign box">
                <a href={github} target="_blank" label="button" rel="noopener noreferrer"><FA name="github"/></a>
                <a href={stackoverflow} target="_blank" label="button" rel="noopener noreferrer"><FA
                    name="stack-overflow"/></a>
            </div>
            <ul className={`box ${badge} contactBlock`}>
                <li className={`${contactBlockItem}`}>
          <span>
            <FeatherIcon size="19" icon="briefcase"/>
              {' '}
          </span>
                    &nbsp; &nbsp; Glovo
                </li>
                <li className={`${contactBlockItem}`}>
                    <span><FeatherIcon size="19" icon="map-pin"/></span>
                    {' '}
                    &nbsp; &nbsp; Barcelona, Spain
                </li>
            </ul>
        </div>
    </aside>
);

const Sidebar = (props) => {
    const {width} = useWindowSize();
    const {children} = props;
    const {pathname} = globalHistory.location;
    let domContent = <DomContent/>;
    if (width > 997) {
        domContent = (
            <Affix offsetTop={0}>
                <DomContent/>
            </Affix>
        );
    }
    if (width < 768) {
        domContent = <></>;
        if (pathname === '/') {
            domContent = <DomContent/>;
        }
    }
    return (
        <>
            <Layout>
                <Content className={`${content} ${background}`}>
                    <Row>
                        <Col sm={24} md={9} lg={6} className={sidebarContent}>
                            {domContent}
                        </Col>
                        <Col sm={24} md={15} lg={18}>
                            <Layout className={`${background} ${boxContent} borderRadiusSection`}>
                                {children}
                            </Layout>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        </>
    );
};

export const Sidebar404 = (props) => {
    const {children} = props;
    return (
        <Layout>
            <Content className={`${content} ${background} `}>
                <Row>
                    <Col sm={24} md={24} lg={24}>
                        <Layout className={`${background} ${boxContent} ${sideBar404Radius}`}>
                            {children}
                        </Layout>
                    </Col>
                </Row>
            </Content>
        </Layout>
    );
};

export default Sidebar;
