import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const Images = () => {
  return (
    <Wrapper>
      <StaticImage src="../assets/images/big.jpg" alt="food" />
    </Wrapper>
  );
};

export default Images;

const Wrapper = styled.section`
  img {
    width: 200px;
  }
`;
