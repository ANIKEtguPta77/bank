import { Box,Typography,useTheme } from "@mui/material"
import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import { tokens } from "../theme"

import Header from "./Header";

import Cookies from 'universal-cookie'

const cookies=new Cookies();
 const Contact = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const columns = [
        {field:"id",headerName:"ID"},
        {
            field:"phonenumber",
            headerName:"Phone Number",
            flex:1,
        },
        {
            field:"name",
            headerName:"Name",
            flex:1,
        },
        {
            field:"email",
            headerName:"Email",
            flex:1,
        },
        
    ];
    const data=cookies.get('all');
    console.log(data)
    
  
    return(
        <Box m="20px" width="180vh">
            <Header title="CONTACT" subtitle="List of Contacts"/>
            <Box m="40px 0 0 0" height="100vh" sx={{
                "& .MuiDataGrid-root": {
            border: "none",
          }, "& .MuiDataGrid-cell": {
            borderBottom: "none",
          }, 
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          
            }}>
            <DataGrid checkboxSelection rows={data} columns={columns} components={{Toolbar:GridToolbar}}/>
            </Box>
        </Box>
    )
}

export default Contact;