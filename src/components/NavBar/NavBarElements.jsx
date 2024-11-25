import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
};

export const Nav = styled.nav`
  background: #0d1321;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;

  @media screen and (min-width: ${breakpoints.tablet}) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1800px;
`;

export const NavLogo = styled(LinkR)`
  color: #dee2e6;
  cursor: pointer;
  font-size: 1.15rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 50px;
  text-decoration: none;
  transition: 0.5s ease;

  &:hover {
    color: #f7b32b;
  }

  &:hover #hide {
    max-width: 100%;
  }

  @media screen and (min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.desktop}) {
    font-size: 1rem;
  }
`;

export const HiddenDiv = styled.div`
  display: inline-block;
  max-width: 0%;
  vertical-align: bottom;
  overflow: hidden;
  white-space: nowrap;
  transition: max-width 0.5s ease-in-out;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: ${breakpoints.mobile}) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }

  &: hover {
    color: #ffc300;
    transition: 0.2s ease-in-out;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  justify-content: space-between;
  width: 500px;

  @media screen and (max-width: ${breakpoints.mobile}) {
    display: none;
  }

  @media screen and (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    width: 400px;}
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkR)`
  color: ${(props) => (props.active ? '#f7b32b' : '#dee2e6')};
  display: flex;
  align-items: center;
  text-align: none;
  height: 100%;
  cursor: pointer;
  font-size: 1.15rem;
  margin-right: 50px;
  text-decoration: none;
  transition: 0.5s ease;

  &:hover {
    color: #f7b32b;
  }

  border-bottom: ${(props) => (props.active ? '1px solid #f7b32b' : 'none')};

  @media screen and (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    font-size: 1rem;
  }
`;
