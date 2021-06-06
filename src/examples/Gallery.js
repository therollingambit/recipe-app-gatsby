import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const query = graphql`
  {
    allFile(filter: { extension: { ne: "svg" } }) {
      # exclude svg
      nodes {
        name
        childImageSharp {
          # fetch image
          gatsbyImageData(
            layout: FIXED # img configs
            placeholder: BLURRED
            width: 200
            height: 200
          )
        }
      }
    }
  }
`;

const Gallery = () => {
  const data = useStaticQuery(query);
  const nodes = data.allFile.nodes;

  return (
    <Wrapper>
      {nodes.map((image, index) => {
        const { name } = image;
        const pathToImage = getImage(image);

        return (
          <article key={index} className="item">
            <GatsbyImage
              image={pathToImage}
              alt={name}
              className="gallery-img"
            />
            <p>{name}</p>
          </article>
        );
      })}
    </Wrapper>
  );
};

export default Gallery;

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  .item {
    margin-right: 1rem;
  }
  .gallery-img {
    border-radius: 1rem;
  }
`;
