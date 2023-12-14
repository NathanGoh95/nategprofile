import React from "react";
import { Container, Content, PageTitle, ContentP, LeftPanel, RightPanel, Image } from "./AboutMePageElements";

const AboutMePage = () => {
  return (
    <Container>
      <Content>
        <LeftPanel>
          <Image src="aboutme.png" alt="aboutme-img" />
        </LeftPanel>
        <RightPanel>
          <PageTitle>About Me</PageTitle>
          <ContentP>Hello, I am Nathan! I started my career as a Marketer in a property developer organization and then futher expanding myself into operational roles in the E-Commerce industry and currently as a Process Coordinator.</ContentP>
          <ContentP>
            I've recently pickup the interest of learning coding skills for web development mainly on the Front-End side. I started my coding journey through self learning and enrolling to a professional certificate offered by Meta.
          </ContentP>
          <ContentP>I'm focusing to further develop my career especially globally as a Frontend Developer, learning from global talents and putting what I've learned into use professionally.</ContentP>
          <ContentP>SKILLS: HTML, CSS, JavaScript, React</ContentP>
        </RightPanel>
      </Content>
    </Container>
  );
};

export default AboutMePage;
