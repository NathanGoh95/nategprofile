import React from "react";
import { CompanyName, Container, Content, LeftPanel, PageTitle, RightPanel, RoleDesc, RoleTitle, Image } from "./ExperiencePageElement";

const ExperiencePage = () => {
  return (
    <Container>
      <Content>
        <LeftPanel>
          <Image src="experiencepage.png" alt="experiencepage-img" />
        </LeftPanel>
        <RightPanel>
          <PageTitle>Working Experience</PageTitle>
          <CompanyName>Kibing Group Malaysia</CompanyName>
          <RoleTitle>Process Coordinator</RoleTitle>
          <RoleDesc>• Coordinate communications between departments & convey execution orders from HQ to smooth daily processes</RoleDesc>
          <RoleDesc>• Complete works given by HQ to ensure consistency for daily processes, documentations & workflows</RoleDesc>
          <RoleDesc>• Responsible for departmental administration work</RoleDesc>
          <RoleDesc>• Appointed personal assistant to the Technical Director</RoleDesc>

          <CompanyName>Daikin Malaysia Sales & Services</CompanyName>
          <RoleTitle>Service Provider Support</RoleTitle>
          <RoleDesc>• Coordinate Service Providers training & onboarding and managed to launch the service nationwide</RoleDesc>
          <RoleDesc>• Convert our current suppliers to be one of the service providers to ensure we have sufficient service providers</RoleDesc>
          <RoleDesc>• Provide assistance to Service Providers during, before & after job service</RoleDesc>
          <RoleDesc>• Attending to customer pre & post service enquiries or complaints</RoleDesc>
          <RoleDesc>• In charge of E-Commerce platform customer chat & assisting to manage stock count</RoleDesc>

          <CompanyName>Matrix Concepts Sdn Bhd</CompanyName>
          <RoleTitle>Sales Support & Marketing</RoleTitle>
          <RoleDesc>• Creating marketing campaigns to attract buyers and managed to complete the sellout of a project</RoleDesc>
          <RoleDesc>• Organising annual events at club house or project site to drive crowds and walk-in buyers</RoleDesc>
          <RoleDesc>• Ensuring marketing collaterals are sufficient to reach different target market</RoleDesc>
          <RoleDesc>• Arranging property exhibitions & roadshows, making sure booth set-ups, scale models & brochures are in order</RoleDesc>
          <RoleDesc>• Compiling & reporting daily sales record</RoleDesc>
        </RightPanel>
      </Content>
    </Container>
  );
};

export default ExperiencePage;
