import styled from 'styled-components';

const navBarHeight = '80px';

export const Container = styled.div`
  height: calc(100vh - ${navBarHeight});
  margin-top: ${navBarHeight};
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

export const Image = styled.img`
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 40%;
  }
`;

export const RightPanel = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const PageTitle = styled.div`
  color: #dee2e6;
  font-size: 40px;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

export const ContentH1 = styled.div`
  color: #dee2e6;
  font-size: 20px;
  margin: 20px 0 0;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ContactTitle = styled.div`
  color: #dee2e6;
  font-size: 25px;
  margin: 30px 0 0;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

export const ContactLink = styled.div`
  color: #dee2e6;
  font-size: 20px;
  margin: 30px 0 0;
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

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

export const Button = styled.div`
  margin-top: 30px;
  cursor: pointer;
  padding: 17px 100px;
  border-radius: 50px;
  border: 0;
  background-color: #dee2e6;
  box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-size: 15px;
  transition: all 0.5s ease;

  &:hover {
    letter-spacing: 3px;
    background-color: #f7b32b;
    color: #0d1b2a;
    box-shadow: #f7b32b 0px 7px 29px 0px;
    font-weight: bold;
  }

  &:active {
    transform: translateY(10px);
    transition: 100ms;
  }

  @media screen and (max-width: 768px) {
    margin-top: 15px;
    padding: 10px 50px;
  }
`;
