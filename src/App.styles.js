import styled from "styled-components";

export const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100dvh;
  width: 100dvw;
  background-color: #f8e9dd;
`;

export const AppContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 540px;
  max-width: 540px;
  min-width: 343px;
  margin: 0 16px 0 16px;
  gap: 24px;
  @media (max-width: 600px) {
    gap: 16px;
  }
`;
