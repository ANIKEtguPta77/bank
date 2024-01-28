import { useTheme } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";
import { tokens } from "../theme";


const PieChart = ({ isDashboard = false ,balance,sent,received}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const data = [
    {
      id: "Balance",
      label: "Net Balance",
      value: balance,
      color: "hsl(10s4, 70%, 50%)",
    },
    
    {
      id: "Sent",
      label: "Amount Sent",
      value: sent,
      color: "hsl(162, 70%, 50%)",
    },
   
    {
      id: "Received",
      label: "Amount Received",
      value: received,
      color: "hsl(344, 70%, 50%)",
    },
  ];

  return (
    <ResponsivePie
      data={data}
      theme={{
        // added
        axis: {
          domain: {
            line: {
              stroke: colors.blueAccent[100],
            },
          },
          legend: {
            text: {
              fill: colors.blueAccent[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.blueAccent[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.blueAccent[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.blueAccent[100],
          },
        },
      }}
      keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
      indexBy="country"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", "10"]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "country", // changed
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "good", // changed
        legendPosition: "middle",
        legendOffset: -40,
      }}
      enableLabel={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 10,
          translateY: 10,
          itemsSpacing: 15,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 1,
          symbolSize: 30,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
     
    />
  );
};

export default PieChart;