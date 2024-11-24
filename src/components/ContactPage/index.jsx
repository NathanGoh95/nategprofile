import React from 'react';
import {
  ContactLink,
  ContactTitle,
  Container,
  Content,
  ContentH1,
  LeftPanel,
  PageTitle,
  RightPanel,
  Image,
} from './ContactPageElements';
import { LucideGithub, LucideLinkedin, LucideMail, LucidePhone } from 'lucide-react';

const ContactPage = () => {
  return (
    <Container>
      <Content>
        <LeftPanel>
          <Image src='contactme.png' alt='contactme-img' />
        </LeftPanel>
        <RightPanel>
          <PageTitle>Contact</PageTitle>
          <ContentH1>Looking for a Developer?</ContentH1>
          <ContentH1>I’d love to chat and I’m available for new opportunities!</ContentH1>
          <ContactTitle>
            <LucideMail />
            Email
          </ContactTitle>
          <ContactLink
            onClick={(e) => {
              e.preventDefault();
              window.location = 'mailto:gohjunhao95@gmail.com';
            }}>
            gohjunhao95@gmail.com
          </ContactLink>
          <ContactTitle>
            <LucidePhone />
            Phone
          </ContactTitle>
          <ContactLink
            onClick={(e) => {
              e.preventDefault();
              window.open('https://wa.me/60162398645', '_blank', 'noopener, noreferrer');
            }}>
            +6016-2398645
          </ContactLink>
          <ContactTitle>
            <LucideLinkedin />
            LinkedIn
          </ContactTitle>
          <ContactLink
            onClick={(e) => {
              e.preventDefault();
              window.open(
                'https://www.linkedin.com/in/nathangjh/',
                '_blank',
                'noopener, noreferrer',
              );
            }}>
            linkedin.com/in/nathangjh/
          </ContactLink>
          <ContactTitle>
            <LucideGithub />
            GitHub
          </ContactTitle>
          <ContactLink
            onClick={(e) => {
              e.preventDefault();
              window.open('https://github.com/NathanGoh95', '_blank', 'noopener, noreferrer');
            }}>
            github.com/NathanGoh95
          </ContactLink>
        </RightPanel>
      </Content>
    </Container>
  );
};

export default ContactPage;
