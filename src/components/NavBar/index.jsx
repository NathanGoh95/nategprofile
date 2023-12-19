import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, HiddenDiv } from "./NavBarElements";
import { PageStateContext } from "../../context/PageState";

const NavBar = () => {
  const { setPageState, toggle } = useContext(PageStateContext);

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo onClick={() => setPageState("default")}>
            N<HiddenDiv id="hide">athan</HiddenDiv>G<HiddenDiv id="hide">oh</HiddenDiv>
          </NavLogo>
          <MobileIcon onClick={() => toggle()}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks onClick={() => setPageState("about-me")}>About Me</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks onClick={() => setPageState("experience")}>Experience</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks onClick={() => setPageState("contact")}>Contact</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
