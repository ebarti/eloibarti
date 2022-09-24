import React from 'react';
import {Layout} from 'antd';
import Header from '../../components/PageLayout/Header';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import ContactForm from '../../components/PageFragments/ContactForm';
import SEO from '../../components/Seo';

const Contact = () => (
    <Layout className="outerPadding">
        <Layout className="container">
            <SEO
                title="Contact"
                description="Want to get in touch? Drop me a line!"
                path="/contact"
                keywords={['Eloi', 'Barti', 'Tremoleda', 'Software Engineer', 'Senior', 'Security', 'Lead', 'Gatsby', 'Technology', 'AWS', 'Google Cloud', 'Platform']}
            />
            <Header/>
            <SidebarWrapper>
                <div className="marginTopTitle">
                    <h1 className="titleSeparate">Contact</h1>
                </div>
                <ContactForm/>
            </SidebarWrapper>
        </Layout>
    </Layout>
);

export default Contact;
