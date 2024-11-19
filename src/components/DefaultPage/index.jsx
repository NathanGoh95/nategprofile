import React, { useContext } from 'react';
import {
  Button,
  ButtonContainer,
  Container,
  Content,
  ContentH1,
  ContentP,
} from './DefaultPageElements';
import { PageStateContext } from '../../context/PageState';

const DefaultPage = () => {
  const { setPageState } = useContext(PageStateContext);

  return (
    <Container>
      <Content>
        <ContentP>Hello, my name is</ContentP>
        <ContentH1>Nathan Goh</ContentH1>
        <ContentP>Frontend Web Developer</ContentP>
        <ButtonContainer>
          <Button onClick={() => setPageState('about-me')}>About Me</Button>
          <Button onClick={() => setPageState('contact')}>Contact Me</Button>
        </ButtonContainer>
      </Content>
    </Container>
  );
};

export default DefaultPage;
