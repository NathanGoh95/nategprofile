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

export const Image = styled.img`
  width: 100%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const RightPanel = styled.div`
  padding: 25px 50px;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: auto;
  box-sizing: border-box;
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
  color: #fff;
  font-size: 40px;
  text-align: center;
`;

export const CompanyName = styled.div`
  color: #eec584;
  font-size: 25px;
  margin: 40px 30px 0;
  display: flex;
  justify-content: center;
`;

export const RoleTitle = styled.div`
  color: #fff;
  font-size: 18px;
  text-decoration: underline;
  margin: 20px 30px 0;
`;

export const RoleDesc = styled.div`
  color: #fff;
  font-size: 16px;
  margin: 20px 30px 0;
`;
