import React from "react";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import Viewers from "./Viewers";
function Home() {
  return (
    <div>
      <Container>
        <ImageSlider />
        <Viewers />
      </Container>
    </div>
  );
}

export default Home;

const Container = styled.div`
  height: 90vh;
  width: 100vw;
  position: relative;

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
