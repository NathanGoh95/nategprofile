import styled from 'styled-components';

const navBarHeight = '80px';

export const Container = styled.div`
  height: calc(100vh - ${navBarHeight});
  overflow: hidden;
  margin-top: ${navBarHeight};
`;

export const Content = styled.div`
  background-color: #000814;
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

export const DrawerContainer = styled.div`
  color: #eec584;
  font-size: 20px;
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
  padding: 30px;
  background: #495057;
  margin-top: 45px;
  transition: 0.5s;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 280px;
    padding: 20px;
  }

  &:hover,
  &.active {
    transform: translateX(-50px);
    background-color: #f7b32b;
    color: #000814;

    @media screen and (max-width: 768px) {
      transform: translateX(50px);
    }
  }

  &::before,
  &.active::before {
    content: '';
    display: flex;
    justify-content: center;
    align-items: center;
    content: '';
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

  &:hover::before,
  &.active::before {
    background-color: #ff7b00;
    color: #000814;
  }

  &::after {
    content: '';
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

  &:hover::after,
  &.active::after {
    background-color: #ff9500;
    color: #ffaa00;
  }
`;

export const RightPanel = styled.div`
  padding: 50px 100px 50px 50px;
  width: 50%;
  height: 100%;
  margin
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
  font-size: 1.5rem;
  margin: 40px 30px 0;
  display: flex;
  justify-content: center;
  position: relative;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 2px;
`;

export const RoleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 20px 0 0;
`;

export const RoleTitle = styled.div`
  color: #dee2e6;
  font-size: 1.15rem;
  text-decoration: underline;
`;

export const RoleYear = styled.div`
  color: #dee2e6;
  font-size: 1.15rem;
  text-align: right;
`;

export const RoleDesc = styled.div`
  color: #dee2e6;
  font-size: 1rem;
  margin: 20px 0 0 30px;
  text-align: justify;
`;

export const SkillContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70%;
  padding: 20px;
  margin-top: auto;
  position: relative;
  top: 15%;
`;

export const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const SkillIcon = styled.img`
  width: 80px;
  height: 80px;
  display: block;
  max-width: 100%;
  max-height: 100%;
  background: transparent;
  vertical-align: middle;
`;

export const SkillLabel = styled.div`
  color: #dee2e6;
  font-size: 1rem;
  margin: 5px 0;
  text-align: center;
`;
