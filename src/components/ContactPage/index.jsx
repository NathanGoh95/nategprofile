import React from 'react';
import {
  Button,
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
import Pdf from '../../assets/Resume_Nathan_Goh.pdf';

const ContactPage = () => {
  return (
    <Container>
      <Content>
        <LeftPanel>
          <Image src='contactme.png' alt='contactme-img' />
        </LeftPanel>
        <RightPanel>
          <PageTitle>Contact</PageTitle>
          <ContentH1>Hope you like what you’ve seen here.</ContentH1>
          <ContentH1>Let’s have a talk to get to know me better!</ContentH1>
          <ContactTitle>Email</ContactTitle>
          <ContactLink
            href='mailto:gohjunhao95@gmail.com'
            onClick={(e) => {
              e.preventDefault();
              window.location = 'mailto:gohjunhao95@gmail.com';
            }}>
            gohjunhao95@gmail.com
          </ContactLink>
          <ContactTitle>Phone</ContactTitle>
          <ContactLink
            href='https://wa.me/60162398645'
            onClick={(e) => {
              e.preventDefault();
              window.open('https://wa.me/60162398645', '_blank', 'noopener, noreferrer');
            }}>
            +6016-2398645
          </ContactLink>
        </RightPanel>
      </Content>
    </Container>
  );
};

export default ContactPage;
