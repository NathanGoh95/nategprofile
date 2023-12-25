import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
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
  width: 70%;

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
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 35px;
  }
`;

export const ContentP = styled.div`
  color: #dee2e6;
  font-size: 20px;
  margin: 30px 20px 0;

  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 17px;
  }
`;
