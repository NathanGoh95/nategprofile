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
  padding: 25px;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const PageTitle = styled.div`
  color: #fff;
  font-size: 40px;
  text-align: center;
`;

export const ContentP = styled.div`
  color: #fff;
  font-size: 20px;
  margin: 30px 20px 0;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
