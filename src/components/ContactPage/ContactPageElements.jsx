import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
`;

export const Content = styled.div`
  background-color: #0d1b2a;
  display: flex;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const LeftPanel = styled.div`
  width: 50%;
  height: 100%;
  padding: 100px 150px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const RightPanel = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  // @media screen and (max-width: 768px) {
  //   width: 100%;
  // }
`;

export const PageTitle = styled.div`
  color: #fff;
  font-size: 40px;
`;

export const ContentH1 = styled.div`
  color: #fff;
  font-size: 20px;
  margin: 20px 0 0;
`;

export const ContactTitle = styled.div`
  color: #fff;
  font-size: 25px;
  margin: 30px 0 0;
`;

export const ContactLink = styled.div`
  color: #fff;
  font-size: 20px;
  margin: 30px 0 0;
  cursor: pointer;
  position: relative;

  &::before {
    content: "";
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
`;

export const Button = styled.div`
  margin-top: 30px;
  cursor: pointer;
  padding: 17px 100px;
  border-radius: 50px;
  border: 0;
  background-color: white;
  box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-size: 15px;
  transition: all 0.5s ease;

  &:hover {
    letter-spacing: 3px;
    background-color: #f7b32b;
    color: #fff;
    box-shadow: #f7b32b 0px 7px 29px 0px;
  }

  &:active {
    letter-spacing: 3px;
    background-color: hsl(261deg 80% 48%);
    color: #fff;
    box-shadow: rgb(93 24 220) 0px 0px 0px 0px;
    transform: translateY(10px);
    transition: 100ms;
  }
`;
