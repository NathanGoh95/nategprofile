import React, { useContext } from "react";
import { SideBarContainer, Icon, CloseIcon, SideBarMenu, SideBarWrapper, SideBarLink } from "./SideBarElements";
import { PageStateContext } from "../../context/PageState";

const SideBar = () => {
  const { isOpen, toggle, setPageState } = useContext(PageStateContext);

  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={() => toggle()}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink onClick={() => setPageState("about-me")}>About Me</SideBarLink>
          <SideBarLink onClick={() => setPageState("experience")}>Experience</SideBarLink>
          <SideBarLink onClick={() => setPageState("contact")}>Contact</SideBarLink>
        </SideBarMenu>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
