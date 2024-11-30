import styled from "styled-components";

const navBarHeight = '80px';
const breakpoints = {
  mobile: '430px',
  tablet: '768px',
  desktop: '1024px',
}

export const Container = styled.div`
  background: #0d1321;
  height: calc(100vh - ${navBarHeight});
  margin-top: ${navBarHeight};
  padding: 20px;
  overflow: hidden;
  position: relative;

  @media screen and (min-width: ${breakpoints.desktop}) {
    padding: 40px;
  }
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

  @media screen and (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    width: 100%;
  }

  @media screen and (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    flex-direction: column;
    padding: 20px;
  }

  @media screen and (min-width: ${breakpoints.desktop}) {
    flex-direction: column;
    padding: 40px;
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

  @media screen and (max-width: ${breakpoints.mobile}) {
    font-size: 2.5rem;
  }

  @media screen and (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    font-size: 4.5rem;
  }
`;

export const ContentP = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #dee2e6;

  @media screen and (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
  }

  @media screen and (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
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

  @media screen and (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    gap: 20px;
  }

  @media screen and (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    gap: 40px;
  }
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

  @media screen and (max-width: ${breakpoints.mobile}) {
    font-size: 0.8rem;
    padding: 20px;
  }

  @media screen and (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.desktop}) {
    width: 180px;
    font-size: 0.8rem;
  }
`;
