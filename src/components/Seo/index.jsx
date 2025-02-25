/* Vendor imports */
import React from 'react';
import PropTypes from 'prop-types';
import {graphql, StaticQuery} from 'gatsby';
/* App imports */
import Config from '../../../config';
import Utils from '../../utils/pageUtils';

const detailsQuery = graphql`
  query DefaultSEOQuery {
    file(name: { eq: "favicon" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED)
      }
    }
  }
`;

function Head({
                  title,
                  description,
                  path,
                  lang,
                  keywords,
                  contentType,
                  imageUrl,
                  translations,
                  meta,
              }) {
    return (
        <StaticQuery
            query={detailsQuery}
            render={(data) => {
                const metaKeywords = keywords && keywords.length > 0
                    ? {name: 'keywords', content: keywords.join(', ')}
                    : [];
                const pageUrl = Utils.resolveUrl(
                    Config.siteUrl,
                    Config.pathPrefix,
                    path,
                );
                const metaImageUrl = Utils.resolveUrl(
                    Config.siteUrl,
                    imageUrl
                );

                return (
                    <>
                        <title>{title}</title>
                        <meta name="description" content={description}/>
                        <meta name="image" content={metaImageUrl}/>
                        <meta name="twitter:card" content="summary_large_image"/>
                        <meta name="twitter:title" content={title}/>
                        <meta name="twitter:url" content={pageUrl}/>
                        <meta name="twitter:description" content={description}/>
                        <meta name="twitter:image" content={metaImageUrl}/>
                        <meta name="twitter:creator" content={Config.author}/>
                        <link rel="icon" href="/favicon.png" type="image/x-icon"/>
                    </>
                );
            }}
        />
    );
}

Head.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    lang: PropTypes.string,
    contentType: PropTypes.oneOf(['article', 'website']),
    imageUrl: PropTypes.string,
    keywords: PropTypes.arrayOf(PropTypes.string),
    translations: PropTypes.arrayOf(
        PropTypes.shape({
            hreflang: PropTypes.string.isRequired,
            path: PropTypes.string.isRequired,
        }),
    ),
    meta: PropTypes.arrayOf(
        PropTypes.shape({
            property: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
        }),
    ),
};

Head.defaultProps = {
    lang: 'en_US',
    contentType: 'website',
    imageUrl: "favicon.png",
    keywords: [],
    translations: [],
    meta: [],
};

export default Head;
