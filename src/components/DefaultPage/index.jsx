import React from "react";
import { Container, Content, ContentH1, ContentP } from "./DefaultPageElements";

const DefaultPage = () => {
  return (
    <Container>
      <Content>
        <ContentP>Hello, my name is</ContentP>
        <ContentH1>Nathan Goh</ContentH1>
        <ContentP>Frontend Web Developer</ContentP>
      </Content>
    </Container>
  );
};

export default DefaultPage;
