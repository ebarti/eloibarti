import { graphql } from 'gatsby';

export const query = graphql`
  {
    allEducationJson{
      edges {
        node {
          name
          img
          title
          years
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
`;
