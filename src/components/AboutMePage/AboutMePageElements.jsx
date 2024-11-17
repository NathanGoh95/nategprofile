import styled from "styled-components";

const navBarHeight = '80px';

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
    width: 35%;
  }
`;

export const RightPanel = styled.div`
  padding: 25px;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  color: #eec584;
  font-size: 40px;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 2px;

  @media screen and (max-width: 768px) {
    font-size: 35px;
  }
`;

export const ContentP = styled.div`
  color: #dee2e6;
  font-size: 1rem;
  margin: 30px 20px 0;
  line-height: 2rem;
  text-align: justify;
  
  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 17px;
    line-height: 2rem;
  }
`;

export const Button = styled.div`
  width: 300px;
  height: 30px;
  margin-top: 30px;
  cursor: pointer;
  padding: 25px;
  border-radius: 8px;
  border: 0;
  background-color: #dee2e6;
  box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-size: 15px;
  display: flex;
  text-align: center;
  line-height: 50px;
  white-space: nowrap;
  transition: all 0.5s ease;
  align-items: center;
  justify-content: center;

  &:hover {
    letter-spacing: 3px;
    background-color: #f7b32b;
    color: #000814;
    box-shadow: #f7b32b 0px 7px 29px 0px;
    font-weight: bold;
  }

  &:active {
    transform: translateY(10px);
    transition: 100ms;
  }

  @media screen and (max-width: 768px) {
    width: auto;
    line-height: normal;
    padding: 10px 20px;
  }
`;
