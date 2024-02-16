import styled from "styled-components";

export const GraphWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  height: 210px;
  width: calc(100% / 8.79);
  cursor: pointer;
  &:hover .graph {
    opacity: 0.8;
  }
`;

export const GraphAndPriceWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 198px;
  width: 100%;
`;

export const GrapPrice = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  width: 155%;
  height: 40px;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
  background-color: #382314;
  color: #fffbf6;
  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150%;
    height: 30px;
  }
`;

export const GrapPriceText = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #fffbf6;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const Graph = styled.div`
  width: 100%;
  height: 150px;
  border-radius: 5px;
  margin-bottom: 8px;
`;

export const Day = styled.h3`
  color: #92857a;
  font-weight: 200;
  font-size: 15px;
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;
