import { useState } from "react"
import { ProSidebarProvider,Menu,MenuItem } from "react-pro-sidebar"
import{Box,IconButton,Typography,useTheme} from "@mui/material"
// import Link from "@material-ui/core/Link";
import { Link } from "react-router-dom"
import { tokens } from "../theme"
import HomeIcon from '@mui/icons-material/Home';
import PaymentIcon from '@mui/icons-material/Payment';
import ContactsIcon from '@mui/icons-material/Contacts';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ReceiptIcon from '@mui/icons-material/Receipt';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import PieChartIcon from '@mui/icons-material/PieChart';
import TimelineIcon from '@mui/icons-material/Timeline';
import MenuIcon from '@mui/icons-material/Menu';
import Untitled from '../assets/Untitled.png';
import Cookies from 'universal-cookie'
const cookies=new Cookies();




const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);



    return (
        <Link to={to}>
            <MenuItem
                active = {selected === title}
                style={{
                color: colors.grey[100]
                }}
                onClick={() => setSelected("title")}
                icon={icon}>
                <Typography>{title}</Typography>
            </MenuItem>
      </Link>
    );
  };

const Sidebar= ({setauth})=>{
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const [isCollapsed,setIsCollapsed] = useState(false)
    const [selected,setSelected] = useState("Dashboard");
    

    const handleLogout=()=>{
        console.log('hello')
        setauth(false)
    }

    return(
        <Box backgroundColor="#236095"
            sx={{
                "& .pro-sidebar-inner": {
                background: `${colors.primary[400]} !important`,
                },
                "& .pro-icon-wrapper": {
                backgroundColor: "transparent !important",
                },
                "& .pro-inner-item": {
                padding: "5px 35px 5px 20px !important",
                },
                "& .pro-inner-item:hover": {
                color: "grey !important",
                },
                "& .pro-menu-item.active": {
                color: "#6870fa !important",
                },
                height:'157vh',
            }}>
            <ProSidebarProvider collapsed={isCollapsed} >
                <Menu iconShape="square" >
                    <MenuItem onClick={()=>setIsCollapsed(!isCollapsed)} 
                    icon = {isCollapsed ?<Box display="flex" color="blue"> <span style={{fontFamily:'Roboto',color:"black"}} >MENU</span></Box>:undefined} 
                    style = {{
                        color:colors.grey[100],
                        backgroundColor:"white",
                        borderRadius:"10px",
                        margin:"4px 5px",
                    }}>

                        {!isCollapsed && (
                                <Box display="flex" width="90%"
                                justifyContent="space-between" alignItems="center" ml="25px">
                                    <Typography varient="h3" color={colors.grey[500]}>MENU</Typography>
                                    <IconButton onClick={()=> setIsCollapsed(!isCollapsed)}>
                                       <MenuIcon sx={{color:"grey"}}/>
                                    </IconButton>
                                </Box>
                            )
                        }
                    </MenuItem>
                    {/* {user} */}
                    {!isCollapsed && (
                        <Box mb="25px" width="100%">
                            <Box display="flex" justifyContent="center" alignItems="center" >
                                <img alt="profile-user"
                                    width="100px"
                                    heigth="100px"
                                    src={Untitled}
                                    style={{cursor:"pointer", borderRadius:"50%"}}
                                />
                            </Box>
                            <Box textAlign="center" >
                                <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{m:"10px 0 0 0"}}>
                                    {cookies.get('firstname')}{cookies.get('lastname')}
                                </Typography>
                                <Typography variant="h5" color={colors.greenAccent[500]}>
                                    User
                                </Typography>
                            </Box>

                        <Box paddingLeft={isCollapsed ? undefined : "1%"} width="100%">
                        <Item
                        title="Dashboard"
                        to="/"
                        icon={<HomeIcon />}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        <Item
                        title="Payment"
                        to="/payment"
                        icon={<PaymentIcon />}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        <Item
                        title="Contact"
                        to= "/contact"
                        icon={<ContactsIcon />}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        <Item
                        title="Invoice Balance"
                        to="/balance"
                        icon={<ReceiptIcon />}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        <Item
                        title="Calander"
                        to="/calander"
                        icon={<CalendarTodayIcon />}
                        selected={selected}
                        setSelected={setSelected}
                        />
                         <Typography
                        variant="h6"
                        color={colors.grey[300]}
                        sx={{ m: "15px 10px 5px 20px" }}
                        >
                        Spend
                        </Typography>
                        <Item
                        title="Pie Chart"
                        to="/bar"
                        icon={<PieChartIcon />}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        <Item
                        title="Timeline"
                        to="/line"
                        icon={<TimelineIcon />}
                        selected={selected}
                        setSelected={setSelected}
                        />
                         <Typography
                        variant="h6"
                        color={colors.grey[300]}
                        sx={{ m: "15px 10px 5px 20px" }}
                        >
                        Help
                        </Typography>
                        <Item
                        title="FAQ page"
                        to="/faq"
                        icon={<HelpCenterIcon />}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        <div onClick={handleLogout}>
                        <Item
                        title="Log out"
                        icon={<HelpCenterIcon />}
                        selected={selected}
                        setSelected={setSelected}
                        />
                        </div>
                        
                        
                    </Box> 
                    </Box>
                    )}
                </Menu>
            </ProSidebarProvider>
        </Box>
    )
}

export default Sidebar
