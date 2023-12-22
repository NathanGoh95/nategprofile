import styled from "styled-components";

export const Container = styled.div`
  background: #0d1b2a;
  height: 100%;
  padding: 20px;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const ContentH1 = styled.div`
  width: 100%;
  font-size: 128px;
  font-weight: 700;
  color: #f7b32b;
  margin: 30px 0;
  animation: fade-in 2s;

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  // @media screen and (max-width: 768px) {
  //   width: 100%;
  // }
`;

export const ContentP = styled.div`
  text-transform: uppercase;
  font-size: 32px;
  font-weight: 700;
  color: #dee2e6;
`;
