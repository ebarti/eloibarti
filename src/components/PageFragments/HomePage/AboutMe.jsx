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
                    My name is <b>Eloi Barti Tremoleda</b>, and I am aMy name is Eloi Barti Tremoleda, and I am a senior
                    engineering leader based in Barcelona.
                </p>
                <p>
                    I do a bit of everything. Fullstack? Hmmm... not sure, although I've built this website myself 😊.
                    Personal preference? Backend!
                </p>
                <p>
                    I am eading Delivery Hero's Security Operations, composed of distributed teams across Europe, Middle
                    East, Asia, and South America, aggregating to the following verticals:
                    - Cyber Threat Intelligence (CTI)
                    - Computer Security Incident Response Team (CSIRT)
                    - Global Cloud Security (GCS)
                    - Global Security Operations (GSOC)Leading Delivery Hero's Security Operations, composed of
                    distributed teams across Europe, Middle East, Asia, and South America, aggregating to the following
                    verticals: - Cyber Threat Intelligence (CTI) - Computer Security Incident Response Team (CSIRT) -
                    Global Cloud Security (GCS) - Global Security Operations (GSOC)
                </p>
            </div>
        </>
    );
};
export default AboutMe;
