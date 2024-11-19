import styled from "styled-components";

const navBarHeight = '80px';

export const Container = styled.div`
  background: #0d1321;
  height: calc(100vh - ${navBarHeight});
  margin-top: ${navBarHeight};
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
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const ContentH1 = styled.div`
  width: 100%;
  font-size: 6rem;
  font-weight: 700;
  color: #f7b32b;
  margin: 30px 0;
  animation: fade-in 2s;
  text-transform: uppercase;
  letter-spacing: 5px;

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 5rem;
  }
`;

export const ContentP = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #dee2e6;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 50px;
  gap: 50px;
`;

export const Button = styled.div`
  cursor: pointer;
  width: 200px;
  height: 30px;
  display: flex;
  padding: 25px;
  align-items: center;
  justify-content: center;
  background-color: #dee2e6;
  transition: all 0.5s ease;
  font-size: 1rem;
  border-radius: 8px;

  &:hover {
    letter-spacing: 3px;
    background-color: #f7b32b;
    color: #0d1321;
    box-shadow: #f7b32b 0px 7px 29px 0px;
    font-weight: bold;
  }

  &:active {
    transform: translateY(10px);
    transition: 100ms;
  }
`;
