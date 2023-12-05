import React, { useContext } from "react";
import { SideBarContainer, Icon, CloseIcon, SideBarMenu, SideBarWrapper, SideBarLink } from "./SideBarElements";
import { PageStateContext } from "../../context/PageState";

const SideBar = () => {
  const { isOpen, toggle } = useContext(PageStateContext);

  return (
    <SideBarContainer isOpen={isOpen}>
      <Icon onClick={() => toggle()}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to="about-me">About Me</SideBarLink>
          <SideBarLink to="experience">Experience</SideBarLink>
          <SideBarLink to="contact">Contact</SideBarLink>
        </SideBarMenu>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
