import React from 'react';
import { Layout } from 'antd';
import Header from '../components/PageLayout/Header';

import SidebarWrapper from '../components/PageLayout/Sidebar';
import AboutMe from '../components/PageFragments/HomePage/AboutMe';
import Skills from '../components/PageFragments/HomePage/SkillProgress';
import Experiences from '../components/PageFragments/HomePage/Experiences';


const MyLayout = () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <Header />
      <SidebarWrapper>
        <>
          <AboutMe />
          <Experiences />
          <Skills />
        </>
      </SidebarWrapper>
    </Layout>
  </Layout>
);

export default MyLayout;
