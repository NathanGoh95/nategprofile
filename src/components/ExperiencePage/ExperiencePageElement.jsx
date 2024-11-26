import styled from 'styled-components';

const navBarHeight = '80px';
const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
};

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

  @media screen and (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    width: 100%;
  }

  @media screen and (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    flex-direction: row;
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

  @media screen and (max-width: ${breakpoints.mobile}) {
    width: 100%;
    height: 15%;
  }
`;

export const DrawerContainer = styled.div`
  color: #eec584;
  font-size: 1.25rem;
  position: relative;
  transform: skewY(-15deg);
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${breakpoints.mobile}) {
    transform: skewY(0);
    font-size: 0.8rem;
    flex-direction: row;
    gap: 15px;

    svg {
      display: none;
    }
  }

  @media screen and (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    font-size: 1rem;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

export const DrawerList = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 350px;
  padding: 30px;
  background: #495057;
  margin-top: 40px;
  transition: 0.5s;
  cursor: pointer;

  @media screen and (max-width: ${breakpoints.mobile}) {
    width: auto;
    padding: 10px;
    margin-top: 5px;
    border-radius: 5px;
  }

  @media screen and (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    width: 250px;
    padding: 20px;
  }

  &:hover,
  &.active {
    transform: translateX(-50px);
    background-color: #f7b32b;
    color: #000814;

    @media screen and (max-width: ${breakpoints.mobile}) {
      transform: translateX(0);
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
    left: -30px;
    width: 30px;
    height: 100%;
    transform-origin: right;
    transform: skewY(45deg);
    transition: 0.5s;

    @media screen and (max-width: ${breakpoints.mobile}) {
      display: none;
    }
  }

  &:hover::before,
  &.active::before {
    background-color: #ff7b00;
    color: #000814;
  }

  &::after {
    content: '';
    position: absolute;
    top: -30px;
    left: 0px;
    width: 100%;
    height: 30px;
    background: #343a40;
    transform-origin: bottom;
    transform: skewX(45deg);
    transition: 0.5s;

    @media screen and (max-width: ${breakpoints.mobile}) {
      display: none;
    }
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
  display: flex;
  justify-self: center;
  align-items: center;
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

  @media screen and (max-width: ${breakpoints.mobile}) {
    width: 100%;
    padding: 0 20px;
    justify-content: start;
  }

  @media screen and (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    width: 50%;
    padding: 20px 50px 20px 20px;
  }
`;

export const PageTitle = styled.div`
  color: #dee2e6;
  font-size: 2.5rem;
  text-align: center;
  position: relative;

  @media screen and (max-width: ${breakpoints.mobile}) {
    font-size: 1.5rem;
  }

  @media screen and (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    font-size: 2rem;
  }
`;

export const CompanyContainer = styled.div`
  height: 100%;
  margin
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CompanyName = styled.div`
  color: #dee2e6;
  font-size: 1.5rem;
  margin: 40px 30px 0;
  display: flex;
  justify-content: center;
  position: relative;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 2px;

  @media screen and (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
    margin: 20px 0 0;
    letter-spacing: 1px;
  }

  @media screen and (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    font-size: 1.2rem;
    margin: 20px 0 0;
    letter-spacing: 1px;
  }
`;

export const RoleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;

  @media screen and (max-width: ${breakpoints.mobile}) {
    margin-top: 10px;
  }
`;

export const RoleTitle = styled.div`
  color: #eec584;
  font-size: 1.15rem;
  text-decoration: underline;

  @media screen and (max-width: ${breakpoints.mobile}) {
    font-size: 0.8rem;
  }

  @media screen and (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    font-size: 1rem;
  }
`;

export const RoleYear = styled.div`
  color: #dee2e6;
  font-size: 1.15rem;
  text-align: right;

  @media screen and (max-width: ${breakpoints.mobile}) {
    font-size: 0.8rem;
  }

  @media screen and (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    font-size: 1rem;
  }
`;

export const RoleDesc = styled.div`
  color: #dee2e6;
  font-size: 1rem;
  margin: 20px 0 0 30px;
  text-align: justify;

  @media screen and (max-width: ${breakpoints.mobile}) {
    font-size: 0.8rem;
    margin: 10px 10px 0;
  }

  @media screen and (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    font-size: 1rem;
  }
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
  position: relative;

  @media screen and (max-width: ${breakpoints.mobile}) {
    grid-template-columns: repeat(2, 1fr);
    height: 85%;
  }
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

  @media screen and (max-width: ${breakpoints.mobile}) {
    width: 50px;
    height: 50px;
  }

  @media screen and (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    width: 60px;
    height: 60px;
  }
`;

export const SkillLabel = styled.div`
  color: #dee2e6;
  font-size: 1rem;
  margin: 5px 0;
  text-align: center;

  @media screen and (max-width: ${breakpoints.mobile}) {
    font-size: 0.8rem;
  }

  @media screen and (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    font-size: 0.8rem;
  }
`;

export const ProjectContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-items: start;
`;

export const ImageContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;

  @media screen and (max-width: ${breakpoints.mobile}) {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
`;

export const ProjectImage = styled.img`
  aspect-ratio: 16/9;
  width: 350px;
  margin-bottom: 20px;
  border-radius: 8px;
  object-fit: cover;
  flex-shrink: 0;

  @media screen and (max-width: ${breakpoints.mobile}) {
    width: 250px;
  }

  @media screen and (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    width: 300px;
  }
`;

export const ProjectTitle = styled.div`
  color: #eec584;
  font-size: 1.15rem;
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    width: 16px;
    height: 16px;
    vertical-align: middle;
    color: #dee2e6;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #eec584;
    }
  }

  @media screen and (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;

    svg {
      width: 12px;    
      height: 12px;
    }
  }

  @media screen and (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    font-size: 1rem;
  }
`;

export const ProjectDesc = styled.div`
  color: #dee2e6;
  font-size: 1rem;
  line-height: 1.6;
  text-align: justify;

  @media screen and (max-width: ${breakpoints.mobile}) {
    font-size: 0.8rem;
  }

  @media screen and (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    font-size: 1rem;
  }
`;