import React from 'react';

import Head from '../../Seo';

const AboutMe = () => {
    return (
        <>
            <div>
                <Head
                    title="About"
                    description="My name is Eloi Barti Tremoleda, and I am a senior engineering leader based in Barcelona, Spain."
                    path=""
                    keywords={['Eloi', 'Barti', 'Tremoleda', 'Software Engineer', 'Senior', 'Security', 'Operations', 'AI', 'Lead', 'Gatsby', 'Technology', 'AWS', 'Google Cloud', 'Platform']}
                />
                <h1 className="titleSeparate">About Me</h1>
                <h3>
                    Hello there! 👋
                </h3>
                <p>
                    My name is <b>Eloi Barti Tremoleda</b>, and I am aMy name is Eloi Barti Tremoleda, and I am based in Barcelona.
                </p>
                <p>
                    I currently lead Delivery Hero's Security Operations, composed of distributed teams across Europe, Middle
                    East, Asia, and South America, aggregating to the following verticals:
                </p>
                <ul>
                    <li>Cyber Threat Intelligence (CTI)</li>
                    <li>Computer Security Incident Response Team (CSIRT)</li>
                    <li>Global Cloud Security (GCS)</li>
                    <li>Global Security Operations (GSOC)</li>
                </ul>
            </div>
        </>
    );
};
export default AboutMe;
