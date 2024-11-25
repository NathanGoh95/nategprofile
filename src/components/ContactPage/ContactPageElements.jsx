import styled from 'styled-components';

const navBarHeight = '80px';
const breakpoints = {
  mobile: '480px',
  tablet: '768px',
  desktop: '1024px',
};

export const Container = styled.div`
  height: calc(100vh - ${navBarHeight});
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
  }
`;

export const Image = styled.img`
  width: 50%;

  @media screen and (max-width: ${breakpoints.mobile}) {
    width: 50%;
  }

  @media screen and (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    width: 70%;
  }
`;

export const RightPanel = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  animation: fade-in-right 2s forwards;
  animation-delay: 0.5s;
  opacity: 0;

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
    align-items: center;
  }

  @media screen and (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    width: 50%;
    padding: 0 20px;
  }
`;

export const PageTitle = styled.div`
  color: #eec584;
  font-size: 2.5rem;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 2px;

  @media screen and (max-width: ${breakpoints.mobile}) {
    font-size: 1.5rem;
  }

  @media screen and (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    font-size: 2rem;
  }
`;

export const ContentH1 = styled.div`
  color: #dee2e6;
  font-size: 1.5rem;
  margin-top: 10px;

  @media screen and (max-width: ${breakpoints.mobile}) {
    font-size: 0.85rem;
  }

  @media screen and (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    font-size: 1rem;
  }
`;

export const ContactTitle = styled.div`
  color: #dee2e6;
  font-size: 1.5rem;
  margin-top: 30px;
  display: flex;
  align-items: center;
  gap: 10px;
  
  svg {
    vertical-align: middle;
    color: #eec584;
  }

  @media screen and (max-width: ${breakpoints.mobile}) {
    font-size: 0.8rem;
    margin-top: 15px;

    svg {
      width: 16px;
      height: 16px;
    }
  }

  @media screen and (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    font-size: 1rem;
    margin-top: 20px;

    svg {
      width: 16px;    
      height: 16px;
    }
`;

export const ContactLink = styled.div`
  color: #dee2e6;
  font-size: 1.25rem;
  margin-top: 15px;
  cursor: pointer;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    border-radius: 4px;
    background-color: #f7b32b;
    bottom: 0;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
  }

  &:hover::before {
    transform-origin: left;
    transform: scaleX(1);
  }

  @media screen and (max-width: ${breakpoints.mobile}) {
    font-size: 0.8rem;
    margin-top: 5px;
  }

  @media screen and (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    font-size: 1rem;
    margin-top: 10px;
  }
`;