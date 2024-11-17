import React from 'react';
import { Container, Content, PageTitle, ContentP, LeftPanel, RightPanel, Image, Button } from './AboutMePageElements';
import Pdf from '../../assets/Resume_Nathan_Goh.pdf';

const AboutMePage = () => {
  return (
    <Container>
      <Content>
        <LeftPanel>
          <Image src='aboutme.png' alt='aboutme-img' />
        </LeftPanel>
        <RightPanel>
          <PageTitle>About Me</PageTitle>
          <ContentP>
            I’ve recently transitioned into the tech industry, focusing on frontend development through self-teaching and continuous learning. After completing an internship, I continued working with the same team, gaining additional valuable
            hands-on experience. This has deepened my passion for creating seamless, user-friendly digital solutions, and I’m committed to further improving my skills. I’m eager to contribute to impactful projects, collaborate with talented
            professionals, and continue growing in a dynamic and innovative environment.
          </ContentP>
          <Button
            href={Pdf}
            onClick={(e) => {
              e.preventDefault();
              window.open(Pdf, '_blank', 'noopener, noreferrer');
            }}>
            Download Resume
          </Button>
        </RightPanel>
      </Content>
    </Container>
  );
};

export default AboutMePage;
