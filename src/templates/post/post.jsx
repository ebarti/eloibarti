import React from 'react';
import {Layout} from 'antd';
import {graphql} from 'gatsby';
import {GatsbyImage} from 'gatsby-plugin-image';
import Header from '../../components/PageLayout/Header';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import Head from '../../components/Seo';
import Comment from '../../components/Comment';
import Config from '../../../config';
import Utils from '../../utils/pageUtils';

import {bannerImgContainer, blogArticle} from './post.module.less';
import 'katex/dist/katex.min.css';
import 'prismjs/themes/prism-tomorrow.css';

const Post = ({data}) => {
    const {html, frontmatter} = data.markdownRemark;
    const {
        title, cover: {childImageSharp: {gatsbyImageData}}, excerpt, path,
    } = frontmatter;

    const canonicalUrl = Utils.resolvePageUrl(
        Config.siteUrl,
        Config.pathPrefix,
        path,
    );
    return (
        <Layout className="outerPadding">
            <Layout className="container">
                <Head
                    title={title}
                    description={excerpt}
                    path={path}
                    keywords={['Eloi', 'Barti', 'Tremoleda', 'Software Engineer', 'Senior', 'Security', 'Lead', 'Gatsby', 'Technology', 'AWS', 'Google Cloud', 'Platform']}
                />
                <Header/>
                <SidebarWrapper>
                    <div className="marginTopTitle">
                        <h1>{title}</h1>
                        <div className={bannerImgContainer}>
                            <GatsbyImage image={gatsbyImageData} title={excerpt} alt={title}/>
                        </div>
                        <article className={blogArticle} dangerouslySetInnerHTML={{__html: html}}/>
                        <Comment pageCanonicalUrl={canonicalUrl} pageId={title}/>
                    </div>
                </SidebarWrapper>
            </Layout>
        </Layout>
    );
};

export const pageQuery = graphql`query ($postPath: String!) {
  markdownRemark(frontmatter: {path: {eq: $postPath}}) {
    html
    timeToRead
    frontmatter {
      title
      date(formatString: "DD MMM YYYY")
      tags
      path
      excerpt
      cover {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
        }
      }
    }
  }
  allMarkdownRemark(
    filter: {frontmatter: {path: {ne: $postPath}}, fileAbsolutePath: {regex: "/index.md$/"}}
  ) {
    edges {
      node {
        frontmatter {
          path
          title
          tags
          excerpt
          cover {
            childImageSharp {
              gatsbyImageData(width: 600, placeholder: TRACED_SVG, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
}
`;

export default Post;
