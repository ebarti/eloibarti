const config = require('./config');

module.exports = [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-less',
    'gatsby-plugin-offline',
    'gatsby-plugin-image',
    {
        resolve: 'gatsby-source-filesystem',
        options: {
            name: 'images',
            path: `${__dirname}/src/images`,
        },
    },
    'gatsby-transformer-json',
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            path: `./src/data/`,
        },
    },
    {
        resolve: 'gatsby-plugin-manifest',
        options: {
            name: 'Eloi Barti',
            short_name: 'Eloi Barti',
            start_url: '/',
            background_color: '#304CFD',
            theme_color: '#304CFD',
            display: 'standalone',
            icon: 'static/favicon.png', // This path is relative to the root of the site.
            crossOrigin: `use-credentials`,
            legacy: true, // this will add apple-touch-icon links to <head>. Required for
            // versions prior to iOS 11.3.
        },
    },
    {
        resolve: 'gatsby-source-filesystem',
        options: {
            name: 'markdown-pages',
            path: `${__dirname}/content`,
        },
    },
    {
        resolve: 'gatsby-transformer-remark',
        options: {
            plugins: [
                {
                    resolve: 'gatsby-remark-katex',
                    options: {
                        strict: 'ignore',
                    },
                },
                {
                    resolve: 'gatsby-remark-images',
                    options: {
                        maxWidth: 1000,
                        quality: 80,
                        showCaptions: true,
                        linkImagesToOriginal: false,
                    },
                },
                {
                    resolve: 'gatsby-remark-external-links',
                    options: {
                        rel: 'nofollow',
                    },
                },
                'gatsby-remark-graphviz',
                'gatsby-remark-prismjs',
            ],
        },
    },
    {
        resolve: 'gatsby-plugin-i18n',
        options: {
            langKeyDefault: config.defaultLanguage,
            useLangKeyLayout: false,
        },
    },
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    {
        resolve: 'gatsby-plugin-antd',
        options: {
            javascriptEnabled: true,
        },
    },
    {
        resolve: 'gatsby-plugin-nprogress',
        options: {
            // Setting a color is optional.
            color: 'black',
            // Disable the loading spinner.
            showSpinner: true,
        },
    },
    {
        resolve: `gatsby-plugin-google-gtag`,
        options: {
            // You can add multiple tracking ids and a pageview event will be fired for all of them.
            trackingIds: [
                "UA-150269486-1", // Google Analytics / GA
            ],
            // This object is used for configuration specific to this plugin
            pluginConfig: {
                // Puts tracking script in the head instead of the body
                head: true,
            },
        },
    },
    {
        resolve: `gatsby-plugin-disqus`,
        options: {
            shortname: `eloibarti`
        }
    },
];
