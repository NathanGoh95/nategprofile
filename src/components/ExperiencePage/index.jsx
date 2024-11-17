import React, { useContext } from 'react';
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { CompanyName, Container, Content, LeftPanel, RightPanel, RoleDesc, RoleTitle, DrawerList, RoleYear, RoleContainer, SkillContainer, SkillIcon, SkillLabel, DrawerContainer, SkillItem } from './ExperiencePageElement';
import { PageStateContext } from '../../context/PageState';
import reactLogo from '../../assets/react-logo.svg';
import nextjsLogo from '../../assets/nextjs-logo.svg';
import javascriptLogo from '../../assets/javascript-logo.svg';
import typescriptLogo from '../../assets/typescript-logo.svg';
import htmlLogo from '../../assets/html5-logo.svg';
import cssLogo from '../../assets/css3-logo.svg';
import tailwindLogo from '../../assets/tailwind-logo.svg';
import mobxLogo from '../../assets/mobx-logo.svg';

const skillLogos = {
  reactLogo,
  nextjsLogo,
  javascriptLogo,
  typescriptLogo,
  htmlLogo,
  cssLogo,
  tailwindLogo,
  mobxLogo,
};

const ExperiencePage = () => {
  const { setContentState, contentState, activeDrawer, setActiveDrawer } = useContext(PageStateContext);
  const handleClick = (drawer) => {
    setContentState(drawer);
    setActiveDrawer(drawer);
  }

  return (
    <Container>
      <Content>
        <LeftPanel>
          <DrawerContainer>
            <DrawerList onClick={() => handleClick('workExperience')} className={activeDrawer === 'workExperience' ? 'active' : ''}>
              Work Experience
              <MdKeyboardDoubleArrowRight />
            </DrawerList>
            <DrawerList onClick={() => handleClick('professionalSkills')} className={activeDrawer === 'professionalSkills' ? 'active' : ''}>
              Professional Skills
              <MdKeyboardDoubleArrowRight />
            </DrawerList>
            <DrawerList onClick={() => handleClick('projects')} className={activeDrawer === 'projects' ? 'active' : ''}>
              Projects
              <MdKeyboardDoubleArrowRight />
            </DrawerList>
          </DrawerContainer>
        </LeftPanel>
        <RightPanel>
          {contentState === 'workExperience' && (
            <>
              <div>
                <CompanyName>Accendo Technologies</CompanyName>
                <RoleContainer>
                  <RoleTitle>Software Engineer (Frontend)</RoleTitle>
                  <RoleYear>2024 - Present</RoleYear>
                </RoleContainer>
                <RoleDesc>• Developed and optimized frontend features using Next.js, TypeScript, Tailwind CSS, and MobX, significantly enhancing rendering efficiency and application performance</RoleDesc>
                <RoleDesc>• Integrated APIs to enable seamless data flow and dynamic content rendering, boosting interactivity and user engagement</RoleDesc>
                <RoleDesc>• Collaborated with stakeholders and designers to create user-friendly enhancements, directly improving users’ experience</RoleDesc>
                <RoleDesc>• Actively participated in agile processes, including sprint planning and stand-ups, contributing to an improvement in feature delivery timelines</RoleDesc>
                <RoleDesc>• Implemented proactive testing and debugging, reducing bug reports and increasing overall product stability</RoleDesc>
              </div>
              <div>
                <CompanyName>Kibing Group Malaysia</CompanyName>
                <RoleContainer>
                  <RoleTitle>Process Coordinator</RoleTitle>
                  <RoleYear>2022 - 2024</RoleYear>
                </RoleContainer>
                <RoleDesc>• Supported the Technical Director as a personal assistant, handling documentation and coordinating daily administrative tasks to streamline operations</RoleDesc>
                <RoleDesc>• Facilitated communication across departments, ensuring the efficient execution of directives from HQ</RoleDesc>
                <RoleDesc>• Established and maintained standardized documentation and workflows, reducing process inconsistencies and improving operational efficiency</RoleDesc>
                <RoleDesc>• Prepared and presented essential departmental documentation like teahnical reports for senior management</RoleDesc>
              </div>
              <div>
                <CompanyName>Daikin Malaysia Sales & Services</CompanyName>
                <RoleContainer>
                  <RoleTitle>Service Provider Support</RoleTitle>
                  <RoleYear>2021 - 2022</RoleYear>
                </RoleContainer>
                <RoleDesc>• Managed the onboarding and training of service providers, ensuring consistent service quality nationwide</RoleDesc>
                <RoleDesc>• Converted 20+ suppliers to authorized service providers, expanding service reach and ensuring resource availability</RoleDesc>
                <RoleDesc>• Provided support for service providers and handled customer inquiries, enhancing both service quality and customer satisfaction</RoleDesc>
                <RoleDesc>• Oversaw the E-commerce platform on customer service and ensuring accurate stock management</RoleDesc>
              </div>
              <div>
                <CompanyName>Matrix Concepts Sdn Bhd</CompanyName>
                <RoleContainer>
                  <RoleTitle>Sales Support & Marketing</RoleTitle>
                  <RoleYear>2018 - 2020</RoleYear>
                </RoleContainer>
                <RoleDesc>• Developed targeted marketing campaigns that achieved 80% sales for assigned projects, effectively reaching targetted buyer demographics</RoleDesc>
                <RoleDesc>• Organized large-scale annual events and property exhibitions, driving walk-in traffic and potential buyers</RoleDesc>
                <RoleDesc>• Ensured marketing collateral availability, coordinating materials like scale models and brochures to optimize promotional efforts</RoleDesc>
                <RoleDesc>• Compiled and analyzed daily sales records, providing valuable insights for strategic planning</RoleDesc>
              </div>
            </>
          )}

          {contentState === 'professionalSkills' && (
            <>
              <SkillContainer>
                <SkillItem>
                  <SkillIcon src={skillLogos.reactLogo} alt='react-logo' />
                  <SkillLabel>React</SkillLabel>
                </SkillItem>
                <SkillItem>
                  <SkillIcon src={skillLogos.nextjsLogo} alt='nextjs-logo' />
                  <SkillLabel>Next.js</SkillLabel>
                </SkillItem>
                <SkillItem>
                  <SkillIcon src={skillLogos.javascriptLogo} alt='javascript-logo' />
                  <SkillLabel>JavaScript</SkillLabel>
                </SkillItem>
                <SkillItem>
                  <SkillIcon src={skillLogos.typescriptLogo} alt='typescript-logo' />
                  <SkillLabel>TypeScript</SkillLabel>
                </SkillItem>
                <SkillItem>
                  <SkillIcon src={skillLogos.htmlLogo} alt='html-logo' />
                  <SkillLabel>HTML</SkillLabel>
                </SkillItem>
                <SkillItem>
                  <SkillIcon src={skillLogos.cssLogo} alt='css-logo' />
                  <SkillLabel>CSS</SkillLabel>
                </SkillItem>
                <SkillItem>
                  <SkillIcon src={skillLogos.tailwindLogo} alt='tailwind-logo' />
                  <SkillLabel>Tailwind CSS</SkillLabel>
                </SkillItem>
                <SkillItem>
                  <SkillIcon src={skillLogos.mobxLogo} alt='mobx-logo' />
                  <SkillLabel>MobX</SkillLabel>
                </SkillItem>
              </SkillContainer>
            </>
          )}

          {contentState === 'projects' && <></>}
        </RightPanel>
      </Content>
    </Container>
  );
};

export default ExperiencePage;
