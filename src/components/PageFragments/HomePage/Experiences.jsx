import React from 'react';

import Experience from '../../Experience/Experience';
import { graphql, StaticQuery } from 'gatsby';
import PropTypes from 'prop-types';

const Experiences = ({ data }) => {
  const { allExperienceJson: { edges } } = data;
  let images = Object.assign({}, ...data.allFile.edges.map(
    (x) => ({ [x.node.name]: x.node })
  ));
  return (
    <div>
      {
        edges.map((x) => (
          <Experience
            img={images[x.node.img]}
            company={x.node.name}
            title={x.node.title}
            years={x.node.years}
          />
        ))
      }
    </div>
  );
};

Experiences.propTypes = {
  data: PropTypes.shape({
    allExperienceJson: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            name: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            years: PropTypes.string.isRequired,
          }).isRequired,
        }).isRequired,
      ).isRequired,
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
        }).isRequired,
      ).isRequired,
    }).isRequired,
  }).isRequired,
};

export default function ExperiencesQuery(props) {
  return (
    <StaticQuery
      query={graphql`
              {
                allExperienceJson{
                  edges {
                    node {
                      name
                      img
                      title
                      years
                    }
                  }
                }
                allFile(filter: { relativeDirectory: { eq: "experience" } }) {
                    edges {
                      node {
                        name
                        childImageSharp {
                          gatsbyImageData(
                            width: 60
                            height: 60
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
        `}
         render={data => <Experiences data={data} {...props} />}
   />
  )
};
