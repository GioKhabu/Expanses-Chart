import React from "react";
import data from "../../data.json";
import Graphs from "../Graphs/Graphs";
import {
  BodyWrapper,
  BodyContentWrapper,
  SpendingTitle,
  GraphsWrapper,
  Divider,
  ResultsWrapper,
  TotalThisMonthHeader,
  TotalThisMonthAmount,
  TotalLastMonthAmount,
  TotalLastMonthHeader,
} from "./Body.styles";

function Body() {
  const [maxNumber, setMaxNumber] = React.useState(0);

  React.useEffect(() => {
    const amounts = data.map((item) => item.amount);
    const maxAmount = Math.max(...amounts);
    setMaxNumber(maxAmount);
  }, []);

  return (
    <BodyWrapper>
      <BodyContentWrapper>
        <SpendingTitle>Spending - Last 7 days</SpendingTitle>
        <GraphsWrapper>
          {data.map((item, index) => {
            return (
              <Graphs
                graph={item}
                key={index}
                index={index}
                maxNumber={maxNumber}
              />
            );
          })}
        </GraphsWrapper>
        <Divider />
        <ResultsWrapper>
          <div>
            <TotalThisMonthHeader>Total this month</TotalThisMonthHeader>
            <TotalThisMonthAmount>$478.33</TotalThisMonthAmount>
          </div>
          <div>
            <TotalLastMonthAmount>+2.4%</TotalLastMonthAmount>
            <TotalLastMonthHeader>from last month</TotalLastMonthHeader>
          </div>
        </ResultsWrapper>
      </BodyContentWrapper>
    </BodyWrapper>
  );
}

export default Body;
