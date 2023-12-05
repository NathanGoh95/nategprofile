import styled from "styled-components";

export const Container = styled.div`
  background-color: blue;
  height: 100%;
  padding: 20px;
`;

export const Content = styled.div`
  background-color: yellow;
  display: flex;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const SubContent = styled.div`
  border: 20px solid green;
  width: 50%;
  height: 100%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
