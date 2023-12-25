import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  overflow: hidden;
`;

export const Content = styled.div`
  background-color: #0d1b2a;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const LeftPanel = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fade-in-left 2s;

  @keyframes fade-in-left {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const CompanyDrawer = styled.div`
  color: #eec584;
  font-size: 25px;
  position: relative;
  transform: skewY(-15deg);

  @media screen and (max-width: 768px) {
    transform: skewY(0);
  }
`;

export const DrawerList = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 350px;
  padding: 40px;
  background: #495057;
  margin-top: 40px;
  transition: 0.5s;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 280px;
    padding: 20px;
  }

  &:hover {
    transform: translateX(-50px);
    background-color: #f7b32b;
    color: #0d1b2a;

    @media screen and (max-width: 768px) {
      transform: translateX(50px);
    }
  }

  &::before {
    display: flex;
    justify-content: center;
    align-items: center;
    content: "";
    position: absolute;
    background: #212529;
    top: 0;
    left: -40px;
    width: 40px;
    height: 100%;
    transform-origin: right;
    transform: skewY(45deg);
    transition: 0.5s;
  }

  &:hover::before {
    background-color: #ff7b00;
    color: #0d1b2a;
  }

  &::after {
    content: "";
    position: absolute;
    top: -40px;
    left: 0px;
    width: 100%;
    height: 40px;
    background: #343a40;
    transform-origin: bottom;
    transform: skewX(45deg);
    transition: 0.5s;
  }

  &:hover::after {
    background-color: #ff9500;
    color: #ffaa00;
  }
`;

export const RightPanel = styled.div`
  padding: 50px;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: auto;
  box-sizing: border-box;
  animation: fade-in-right 2s forwards;
  animation-delay: 0.5s;
  opacity: 0;
  position: relative;

  @keyframes fade-in-right {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const PageTitle = styled.div`
  color: #dee2e6;
  font-size: 40px;
  text-align: center;
  position: relative;
`;

export const CompanyName = styled.div`
  color: #eec584;
  font-size: 25px;
  margin: 40px 30px 0;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const RoleTitle = styled.div`
  color: #dee2e6;
  font-size: 18px;
  text-decoration: underline;
  margin: 20px 30px 0;
`;

export const RoleDesc = styled.div`
  color: #dee2e6;
  font-size: 16px;
  margin: 20px 30px 0;
`;
