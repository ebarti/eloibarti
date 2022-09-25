import {graphql, StaticQuery} from 'gatsby';
import PropTypes from "prop-types";
import React from "react";
import Education from "../../Education/Education";
import {educations,} from './educations.module.less';

const Educations = ({data}) => {
    const {allEducationJson: {edges}} = data;
    let images = Object.assign({}, ...data.allFile.edges.map(
        (x) => ({[x.node.name]: x.node})
    ));
    return (
        <div className={educations}>
            <center><h2>EDUCATION</h2></center>
            {
                edges.map((x) => (
                    <Education
                        img={images[x.node.img]}
                        university={x.node.name}
                        title={x.node.title}
                        years={x.node.years}
                        gpa={x.node.gpa}
                    />
                ))
            }
        </div>
    );
};

Educations.propTypes = {
    data: PropTypes.shape({
        allEducationJson: PropTypes.shape({
            edges: PropTypes.arrayOf(
                PropTypes.shape({
                    node: PropTypes.shape({
                        name: PropTypes.string.isRequired,
                        title: PropTypes.string.isRequired,
                        years: PropTypes.string.isRequired,
                        img: PropTypes.string.isRequired,
                        gpa: PropTypes.string.isRequired,
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

export default function EducationsQuery(props) {
    return (
        <StaticQuery
            query={graphql`
              {
                allEducationJson{
                  edges {
                    node {
                      name
                      title
                      years
                      img
                      gpa
                    }
                  }
                }
                allFile(filter: { relativeDirectory: { eq: "education" } }) {
                    edges {
                      node {
                        name
                        childImageSharp {
                          gatsbyImageData(layout: FIXED)
                        }
                        extension
                        publicURL
                      }
                    }
                  }
              }
        `}
            render={data => <Educations data={data} {...props} />}
        />
    )
};
