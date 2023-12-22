import React, { useContext } from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { CompanyName, Container, Content, LeftPanel, PageTitle, RightPanel, RoleDesc, RoleTitle, CompanyDrawer, DrawerList } from "./ExperiencePageElement";
import { PageStateContext } from "../../context/PageState";

const ExperiencePage = () => {
  const { setContentState, contentState } = useContext(PageStateContext);

  return (
    <Container>
      <Content>
        <LeftPanel>
          <CompanyDrawer>
            <DrawerList onClick={() => setContentState("contentOne")}>
              2022 - Current
              <MdKeyboardDoubleArrowRight />
            </DrawerList>
            <DrawerList onClick={() => setContentState("contentTwo")}>
              2021 - 2022
              <MdKeyboardDoubleArrowRight />
            </DrawerList>
            <DrawerList onClick={() => setContentState("contentThree")}>
              2018 - 2020
              <MdKeyboardDoubleArrowRight />
            </DrawerList>
          </CompanyDrawer>
        </LeftPanel>
        <RightPanel>
          {contentState === "contentOne" && (
            <div>
              <CompanyName>Kibing Group Malaysia</CompanyName>
              <RoleTitle>Process Coordinator</RoleTitle>
              <RoleDesc>• Coordinate communications between departments & convey execution orders from HQ to smooth daily processes</RoleDesc>
              <RoleDesc>• Complete works given by HQ to ensure consistency for daily processes, documentations & workflows</RoleDesc>
              <RoleDesc>• Responsible for departmental administration work</RoleDesc>
              <RoleDesc>• Appointed personal assistant to the Technical Director</RoleDesc>
            </div>
          )}

          {contentState === "contentTwo" && (
            <div>
              <CompanyName>Daikin Malaysia Sales & Services</CompanyName>
              <RoleTitle>Service Provider Support</RoleTitle>
              <RoleDesc>• Coordinate Service Providers training & onboarding and managed to launch the service nationwide</RoleDesc>
              <RoleDesc>• Convert our current suppliers to be one of the service providers to ensure we have sufficient service providers</RoleDesc>
              <RoleDesc>• Provide assistance to Service Providers during, before & after job service</RoleDesc>
              <RoleDesc>• Attending to customer pre & post service enquiries or complaints</RoleDesc>
              <RoleDesc>• In charge of E-Commerce platform customer chat & assisting to manage stock count</RoleDesc>
            </div>
          )}

          {contentState === "contentThree" && (
            <div>
              <CompanyName>Matrix Concepts Sdn Bhd</CompanyName>
              <RoleTitle>Sales Support & Marketing</RoleTitle>
              <RoleDesc>• Creating marketing campaigns to attract buyers and managed to complete the sellout of a project</RoleDesc>
              <RoleDesc>• Organising annual events at club house or project site to drive crowds and walk-in buyers</RoleDesc>
              <RoleDesc>• Ensuring marketing collaterals are sufficient to reach different target market</RoleDesc>
              <RoleDesc>• Arranging property exhibitions & roadshows, making sure booth set-ups, scale models & brochures are in order</RoleDesc>
              <RoleDesc>• Compiling & reporting daily sales record</RoleDesc>
            </div>
          )}
        </RightPanel>
      </Content>
    </Container>
  );
};

export default ExperiencePage;
