/* eslint-disable react/forbid-prop-types */
/* Vendor imports */
import React from 'react';
import PropTypes from 'prop-types';
import {graphql} from 'gatsby';
import {Col, Layout, Row,} from 'antd';
/* App imports */
import Head from '../../components/Seo';
import Header from '../../components/PageLayout/Header';
import PostCard from '../../components/PostCard';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
import Config from '../../../config';
import Utils from '../../utils/pageUtils';
import {bannerImgContainer, tagsList} from './tags.module.less';
import ImageCard from '../../components/Image/Image';

const TagPage = ({data, pageContext}) => {
    const {tag} = pageContext;
    const tagName = Config.tags[tag].name || Utils.capitalize(tag);
    const tagPagePath = Config.pages.tag;
    const tagImage = data.allFile.edges.find((edge) => edge.node.name === tag).node;
    const posts = data.allMarkdownRemark.edges;
    return (
        <Layout className="outerPadding">
            <Layout className="container">
                <Header/>
                <Head
                    title={tagName}
                    description={`All post about ${tagName}. ${Config.tags[tag].description} `}
                    path={Utils.resolvePageUrl(tagPagePath, tag)}
                    keywords={[tagName]}
                />
                <SidebarWrapper>
                    <div className={`marginTopTitle ${tagsList}`}>
                        <h1>
                            #
                            {tagName}
                        </h1>
                        <div className={bannerImgContainer}>
                            <ImageCard image={tagImage} alt={tagName} imageStyle={{
                                height: 300,
                                width: 300
                            }}/>
                        </div>
                        <h4 className="textCenter">
                            {Config.tags[tag].description}
                        </h4>
                    </div>
                    <Row gutter={[20, 20]}>
                        {posts.map((post, key) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <Col key={key} xs={24} sm={24} md={12} lg={8}>
                                <PostCard data={post}/>
                            </Col>
                        ))}
                    </Row>
                </SidebarWrapper>
            </Layout>
        </Layout>
    );
};

TagPage.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.arrayOf(PropTypes.object).isRequired,
        }).isRequired,
        allFile: PropTypes.shape({
            edges: PropTypes.arrayOf(
                PropTypes.shape({
                    node: PropTypes.shape({
                        name: PropTypes.string.isRequired,
                        childImageSharp: PropTypes.object.isRequired,
                        extension: PropTypes.string.isRequired,
                        publicURL: PropTypes.string.isRequired,
                    }).isRequired,
                }),
            ).isRequired,
        }).isRequired,
    }).isRequired,
    pageContext: PropTypes.shape({
        tag: PropTypes.string.isRequired,
    }).isRequired,
};

export const pageQuery = graphql`query ($tag: String!) {
  allMarkdownRemark(
    filter: {frontmatter: {tags: {in: [$tag]}}, fileAbsolutePath: {regex: "/index.md$/"}}
    sort: {fields: [frontmatter___date], order: DESC}
  ) {
    edges {
      node {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
          path
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
  allFile(filter: {name: {eq: $tag}, dir: {regex: "/tags$/"}}) {
    edges {
      node {
        name
        childImageSharp {
          gatsbyImageData(
          height: 600
          placeholder: BLURRED
          formats: [AUTO, WEBP]
          quality: 100
          )
        }
        extension
        publicURL
      }
    }
  }
}
`;

export default TagPage;
