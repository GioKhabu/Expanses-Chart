import React from "react";
import {
  GraphWrapper,
  GraphAndPriceWrapper,
  GrapPrice,
  GrapPriceText,
  Graph,
  Day,
} from "./Graphs.styles";
const getCurrentDayOfWeekNumber = () => {
  const currentDate = new Date();
  let dayOfWeekNumber = currentDate.getDay();
  dayOfWeekNumber = dayOfWeekNumber === 0 ? 6 : dayOfWeekNumber - 1;
  return dayOfWeekNumber;
};
function Graphs({ graph, index, maxNumber }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [nDay, setNDay] = React.useState(0);

  React.useEffect(() => {
    setNDay(getCurrentDayOfWeekNumber());
  }, [nDay]);

  return (
    <GraphWrapper
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <GraphAndPriceWrapper>
        {isHovered && (
          <GrapPrice style={{bottom: `${(150 / maxNumber) * graph.amount+8}px`}}>
            <GrapPriceText>{`$${graph.amount}`}</GrapPriceText>
          </GrapPrice>
        )}
        <Graph
          className="graph"
          style={
            index === nDay
              ? {
                  backgroundColor: "#b4e0e5",
                  height: `${(150 / maxNumber) * graph.amount}px`,
                }
              : {
                  backgroundColor: "#ec755d",
                  height: `${(150 / maxNumber) * graph.amount}px`,
                }
          }
        />
      </GraphAndPriceWrapper>
      <Day>{graph.day}</Day>
    </GraphWrapper>
  );
}

export default Graphs;
