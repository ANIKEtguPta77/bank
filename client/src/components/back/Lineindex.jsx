import { Box } from "@mui/material";
import Header from "./Header";
import LineChart from "./Line";

const Line = ({linedata}) => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <LineChart linedata={linedata}/>
      </Box>
    </Box>
  );
};

export default Line;