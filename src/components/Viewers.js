import React from "react";
import styled from "styled-components";

function Viewers() {
  return (
    <Conatiner>
      <h4>More Like This</h4>
    </Conatiner>
  );
}

export default Viewers;

const Conatiner = styled.div`
  width: 100vw;
  margin: 2vw 3vw;
  h4 {
    font-size: 3vh;
  }
`;
