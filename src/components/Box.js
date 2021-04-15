import React from "react";
import styled from "styled-components";
const BoxContainer = styled.div`
  width: 350px;
  height: 200px;
  //border: 1px solid red;
  border-radius: 35px;
  background-color: white;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.14),
    0px 1px 10px 0px rgba(0, 0, 0, 0.12), 0px 2px 4px -1px rgba(0, 0, 0, 0.2);
  @media (min-width: 768px) {
    width: 35vw;
    height: 35vh;
  }
`;
const Box = () => {
  return <BoxContainer></BoxContainer>;
};

export default Box;
