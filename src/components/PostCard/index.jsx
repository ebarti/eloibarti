import React from 'react';
import moment from 'moment';
import { Link } from 'gatsby';
import { dateHolder, mrTp20, postCard, postCardImg, } from './postCard.module.less';
import Utils from '../../utils/pageUtils';
import { getSrc } from "gatsby-plugin-image"

const PostCard = (props) => {
  const { data: { node: { frontmatter } } } = props;

  return (
    <div className={postCard}>
      <Link to={Utils.resolvePageUrl(frontmatter.path)}>
        <div
          className={postCardImg}
          style={{
            backgroundImage: `url(${frontmatter ? getSrc(frontmatter.cover.childImageSharp.gatsbyImageData) : ''})`,
          }}
        />
        <div className={mrTp20}>
          <p>
            <span className={dateHolder}>{frontmatter ? moment(frontmatter.date)
              .format('MMM Do YYYY') : ''}</span>
          </p>
          <h3>{frontmatter ? frontmatter.title : ''}</h3>
          <p>{frontmatter ? frontmatter.excerpt : ''}</p>
          <p style={{
            color: '#ce6d96',
            wordSpacing: '10px'
          }}>
            {
              `#${frontmatter.tags.join(' #')}`
            }
          </p>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
