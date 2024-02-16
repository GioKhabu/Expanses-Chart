import styled from "styled-components";

export const BodyWrapper = styled.main`
  width: 100%;
  min-width: 343px;
  max-width: 540px;
  height: 511px;
  background-color: #fffbf6;
  border-radius: 20px;
  @media (max-width: 600px) {
    height: 421px;
  }
`;

export const BodyContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 32px 39.5px 40px 36px;
  @media (max-width: 600px) {
    margin: 24px 20px;
  }
`;

export const SpendingTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #382314;
  @media (max-width: 600px) {
    font-size: 24px;
  }
`;

export const GraphsWrapper = styled.div`
  max-width: 460px;
  display: flex;
  align-items: flex-end;
  margin-top: 18px;
  gap: 4%;
`;

export const Divider = styled.hr`
  margin: 0;
  width: 100%;
  height: 2px;
  background-color: #f8e9dd;
  border: none;
  border-radius: 1px;
  margin-top: 32px;
  margin-bottom: 32px;
  @media (max-width: 600px) {
    margin-top: 24px;
    margin-bottom: 24px;
  }
`;

export const ResultsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  margin-bottom: 40px;
  @media (max-width: 600px) {
    margin-bottom: 24px;
  }
`;

export const TotalThisMonthHeader = styled.h3`
  font-size: 18px;
  font-weight: 200;
  color: #92857a;
  @media (max-width: 600px) {
    font-size: 15px;
  }
`;
export const TotalThisMonthAmount = styled.h2`
  font-size: 48px;
  font-weight: 600;
  color: #382314;
  @media (max-width: 600px) {
    font-size: 30px;
  }
`;
export const TotalLastMonthAmount = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #382314;
  @media (max-width: 600px) {
    font-size: 15px;
  }
`;
export const TotalLastMonthHeader = styled.h2`
  font-size: 18px;
  font-weight: 200;
  color: #92857a;
  @media (max-width: 600px) {
    font-size: 15px;
  }
`;
