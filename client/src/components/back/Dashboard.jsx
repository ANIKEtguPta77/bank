import { Box,Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import FlightIcon from '@mui/icons-material/Flight';
import Header from "./Header";
import LineChart from "./Line";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import StatBox from "./StatBox";
import PieChart from "./bar1";
import ProgressCircle from "./ProgressCircle";
import { useEffect } from "react";
import Cookies from 'universal-cookie'
const cookies=new Cookies();

const Dashboard = ({balance,sent,received,transarr,linedata,setbalance,settransarr,setsent,setreceived,setlinedata}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  
  
 
  useEffect(()=>{
    setbalance(cookies.get('balance'));
    settransarr((cookies.get('transactions')).reverse());
    setsent(cookies.get('sent'));
    setreceived(cookies.get('received'));
    setlinedata(cookies.get('linedata'));
    
  })
 
 
  return (
    <Box m="10px" >
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

     
      </Box>
            

               {/* GRID & CHARTS */}
      <Box
        height="20vh"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 4"
          height= "18vh"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
           <StatBox
           titlename="Balance"
            title={balance}
            subtitle="Money left"
            progress="0.23"
            increase="77%"
            icon={
              <AccountBalanceIcon
                sx={{ color: colors.greenAccent[200], fontSize: "20px" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 4"
          height="18vh"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            titlename="Recent Transactions"
            title={transarr[0].user}
            subtitle={(transarr[0].amount)>0?"Received From ":"Sent To"}
            progress="0.79"
            increase="21%"
            icon={
              <ShoppingCartCheckoutIcon
                sx={{ color: colors.greenAccent[200], fontSize: "20px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 4"
          height="18vh"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            titlename="Recent Transactions"
            title={transarr[0].amount}
            subtitle="Amount"
            progress="0.50"
            increase="50%"
            icon={
              <FlightIcon
                sx={{ color: colors.greenAccent[200], fontSize: "20px" }}
              />
            }
          />
        </Box>
       
     </Box>


     {/* Row2 */}
     <Box  display="flex">
     <Box
          width="130vh"
          height="55vh"
          mr="20px"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[400]}
              >
                Total Expenses of Month
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[300]}
              >
                62600 Rupees
              </Typography>
            </Box>
            <Box>
            </Box>
          </Box>
          <Box height="250px" m="-20px 20px 0 0">
            <LineChart linedata={linedata}/>
          </Box>
        </Box>


        <Box
          width="50vh"
          height="55vh"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Transactions
            </Typography>
          </Box>
          {transarr.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                {transaction.user}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.date}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}></Box>
              <Box
                backgroundColor={transaction.amount>0?colors.greenAccent[500]:colors.redAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.amount}
              </Box>
            </Box>
          ))}
        </Box>
</Box>


 {/* ROW 3 */}

  <Box display="flex" mt="15px">
  <Box    width="60vh"
          height="45vh"
          backgroundColor={colors.primary[400]}
          p="30px"
          mr="20px"
        >
          <Typography variant="h4" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              48,352 Rupees revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>

          <Box
          width="120vh"
          height="45vh"
          backgroundColor={colors.primary[400]}
          >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" m="-20px 0 0 0">
            <PieChart isDashboard={true} balance={balance} sent={sent} received={received}/>
          </Box>
        </Box>

  </Box>


</Box>
  


     
  );
};

export default Dashboard;