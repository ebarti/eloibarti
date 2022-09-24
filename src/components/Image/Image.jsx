import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

const ImageCard = (data) => {
  const { image, alt = "", imageStyle=null } = data;

  if (!!image && !!image.childImageSharp) {
    if (!!imageStyle) {
      return (
        <GatsbyImage
          image={image.childImageSharp.gatsbyImageData}
          style={imageStyle}
          alt={alt}
        />
      );
    } else {
      return (
        <GatsbyImage
          image={image.childImageSharp.gatsbyImageData}
          alt={alt}
        />
      );
    }
  } else if (!image.childImageSharp && image.extension === 'svg') {
    if (!!imageStyle) {
      return <img style={imageStyle} src={image.publicURL} alt={alt} />
    } else {
      return <img src={image.publicURL} alt={alt} />
    }
  } else {
    return null
  }
};


export default ImageCard;
