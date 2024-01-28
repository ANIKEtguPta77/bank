import { Box } from "@mui/material";
import Header from "./Header";
import PieChart from "./bar1";

const Pie = ({balance,sent,received}) => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChart isDashboard={true} balance={balance} sent={sent} received={received}/>
      </Box>
    </Box>
  );
};

export default Pie;