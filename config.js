module.exports = {
    pathPrefix: '',
    siteUrl: 'https://eloibarti.com',
    siteTitle: 'Eloi Barti',
    siteDescription: 'Eloi Barti\'s personal website.',
    author: 'Eloi Barti',
    postsForArchivePage: 3,
    defaultLanguage: 'en',
    disqusScript: process.env.DISQUS_SCRIPT || 'https://eloibarti.disqus.com/embed.js',
    pages: {
        home: '/',
        blog: 'blog',
        contact: 'contact',
        tag: 'tags',
    },
    social: {
        github: 'https://github.com/ebarti',
        stackoverflow: 'https://stackoverflow.com/users/6643659/ebarti',
        linkedin: 'https://www.linkedin.com/in/ebarti',
        tryhackme: 'https://tryhackme.com/p/eloib',
        rss: '/rss.xml',
    },
    contactFormUrl: process.env.CONTACT_FORM_ENDPOINT || 'https://getform.io/f/09a3066f-c638-40db-ad59-05e4ed71e451',
    googleAnalyticTrackingId: process.env.GA_TRACKING_ID || '',
    tags: {
        eloibarti: {
            name: 'eloibarti.com',
            description: 'Anything related to building my personal website.',
            color: '#f02a10',
        },
        math: {
            name: 'math',
            description: 'Math is... well, math.',
            color: '#f0da50',
        },
        aws: {
            name: 'aws',
            description: 'AWS is a subsidiary of Amazon that provides on-demand cloud computing platforms and APIs.',
            color: '#90c53f',
        },
        GCP: {
            name: 'GCP',
            description: 'Google Cloud Platform, offered by Google, is a suite of cloud computing services.',
            color: '#257acc',
        },
        cpp: {
            name: 'cpp',
            description: 'C++ is a general-purpose programming language as an extension of the C programming language.',
            color: '#61dbfa',
        },
        metal: {
            name: 'Metal',
            description: 'Metal is a low-level, low-overhead hardware-accelerated 3D graphic and compute shader API created by Apple.',
            color: '#309f64',
        },
        go: {
            name: 'go',
            description: 'Go is a statically typed, compiled programming language designed at Google.',
            color: '#43ace0',
        },
        python: {
            name: 'python',
            description: 'A general purpose programming language that is widely used for developing various applications.',
            color: '#f9c646',
        },
        gatsbyjs: {
            name: 'Gatsby.js',
            description: 'A framework built over ReactJS to generate static page web application.',
            color: '#6f309f',
        },
    },
};
