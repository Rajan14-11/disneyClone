import React from "react";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import Recommended from "./Recommended";
import Viewers from "./Viewers";
function Home() {
  return (
    <div>
      <Container>
        <ImageSlider />
        <Viewers />
        <Recommended />
      </Container>
    </div>
  );
}

export default Home;

const Container = styled.div`
  border-color: rgba(249, 249, 249, 0.8);
  position: relative;
  overflow-x: hidden;
  display: block;
  top: 40px;
  padding: 0 calc(3.5vw + 5px);

  &:before {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: -1;
    background: url("/images/home-background.png") center center/cover no-repeat;
  }
`;
