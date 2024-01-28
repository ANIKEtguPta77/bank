import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";


const LineChart = ({ isCustomLineColors = false, isDashboard = false,linedata }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
 
  var data=[
   {
    id: "Expenses",
    color: tokens("dark").greenAccent[500],
    data:linedata
   }
  ]
  

  return (
    <ResponsiveLine
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.greenAccent[100],
            },
          },
          legend: {
            text: {
              fill: colors.greenAccent[200],
            },
          },
          ticks: {
            line: {
              stroke: colors.greenAccent[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.greenAccent[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.greenAccent[100],
          },
        },
        tooltip: {
          container: {
            color: colors.primary[500],
          },
        },
      }}
      colors={isDashboard ? { datum: "color" } : { scheme: "nivo" }} // added
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: 600,//y-axis value change
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.5f"
      curve="catmullRom"
      axisTop={null}
      axisRight={null}

      axisBottom={{
        orient: "bottom",
        tickValues:30,
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 5,
        legend: isDashboard ? undefined : "Date", // added
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickValues: 15, // added
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "Spend", // added
        legendOffset: -50,
        legendPosition: "middle",
      }}
      enableGridX={false}
      enableGridY={false}
      pointSize={8}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "square",
          symbolBorderColor: "rgba(0, 0, 0, .7)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default LineChart;