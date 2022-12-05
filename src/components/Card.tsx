import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
`;

const Image  = styled.img`
  width: 100%;
  height: 202px; // from YT
  background-color: #999;
`;

export const Card = () => {
    return <Container><Image/></Container>
}