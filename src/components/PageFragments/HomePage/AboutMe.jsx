import React from 'react';

import Head from '../../Seo';

const AboutMe = () => {
  return (
    <>
      <div>
        <Head
          title="About"
          description="My name is Eloi Barti Tremoleda, and I am a senior lead software engineer based in Barcelona, Spain."
          path=""
          keywords={['Eloi', 'Barti', 'Tremoleda', 'Software Engineer', 'Senior', 'Security', 'Lead', 'Gatsby', 'Technology', 'AWS', 'Google Cloud', 'Platform']}
        />
        <h1 className="titleSeparate">About Me</h1>
        <h3>
          Hello there! 👋
        </h3>
        <p>
          My name is <b>Eloi Barti Tremoleda</b>, and I am a senior lead software engineer based in Barcelona, Spain.
        </p>
        <p>
          I do a bit of everything. Fullstack? Hmmm... not sure, although I've built this website myself 😊. Personal preference? Backend!
        </p>
        <p>
          I lead the Platform Security team at Glovo, within the Cyber-security department of Engineering.
          In my current job I am both an Individual Contributor (IC) and an Engineering Manager (EM):
          I manage the performance of my direct reports (as well as performing all the EM-related chores) while
          being a key contributor of the Cyber-security cluster.
        </p>
      </div>
    </>
  );
};
export default AboutMe;
