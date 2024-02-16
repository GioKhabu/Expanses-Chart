import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-width: 343px;
  max-width: 540px;
  height: 125px;
  background-color: #ec755d;
  border-radius: 20px;
  @media (max-width: 600px) {
    height: 97px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-left: 32px;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 18px;
  font-weight: 200;
  color: #fff;
  @media (max-width: 600px) {
    font-size: 15px;
  }
`;

export const Balance = styled.h2`
  font-size: 32px;
  font-weight: 600;
  color: #fff;
  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

export const LogoWrapper = styled.div`
  position: relative;
  display: flex;
  width: 72px;
  height: 48px;
  margin-right: 39px;
  @media (max-width: 600px) {
    width: 60px;
    height: 40px;
  }
`;

export const TranpsarentPart = styled.div`
  width: 46px;
  height: 46px;
  border: 2px solid #fff;
  border-radius: 150%;
  z-index: 2;
  @media (max-width: 600px) {
    width: 40px;
    height: 40px;
  }
`;

export const BlackPart = styled.div`
  position: absolute;
  left: 24px;
  width: 48px;
  height: 48px;
  background-color: #382314;
  border-radius: 150%;
  z-index: 1;
  @media (max-width: 600px) {
    width: 40px;
    height: 40px;
  }
`;
