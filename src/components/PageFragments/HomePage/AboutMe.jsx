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
                    My name is <b>Eloi</b>, and I am based in Barcelona.
                </p>
                <p>
                    I currently lead Welltech's Business IT and Security.
                </p>
            </div>
        </>
    );
};
export default AboutMe;
