const config = require('./config');

require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = [

    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-json',
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            path: `${__dirname}/src/data`,
        },
    },
    {
        resolve: 'gatsby-source-filesystem',
        options: {
            name: 'images',
            path: `${__dirname}/src/images`,
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
                'gatsby-remark-graphviz',
                {
                    resolve: 'gatsby-remark-katex',
                    options: {
                        strict: 'ignore',
                    },
                },
                // {
                //     resolve: 'gatsby-remark-images',
                //     options: {
                //         maxWidth: 1000,
                //         quality: 80,
                //         showCaptions: true,
                //         linkImagesToOriginal: false,
                //     },
                // },
                'gatsby-remark-prismjs',
            ],
        },
    },
    {
      resolve: 'gatsby-plugin-offline',
      options: {
          workboxConfig: {
              globPatterns: ['**/static*']
          }
      }
    },
    'gatsby-plugin-less',
    'gatsby-plugin-sitemap',
    {
        resolve: 'gatsby-plugin-robots-txt',
        options: {
            host: 'https://www.eloibarti.com',
            sitemap: 'https://www.eloibarti.com/sitemap.xml',
            policy: [{userAgent: '*', allow: '/'}]
        }
    },
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
