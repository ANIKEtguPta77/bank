import {React,useState} from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import {Box} from '@mui/material';
import {Navbar,Feed,Infobar,Footer,Register,Login} from './components/front'
import Cookies from 'universal-cookie'
import { ColorMOdeContext,useMode } from './components/theme';
import { CssBaseline,ThemeProvider } from '@mui/material';
import {Dashboard,Sidebar,Topbar,Payments,Contact,Invoice,Calander,Faq,Bar,Line} from './components/back'


const cookies=new Cookies();

const App=()=>{

 
  const [auth,setauth]=useState(false);
  const[theme,colorMode] = useMode()
  const [isSidebar, setIsSidebar] = useState(true);
  const [balance,setbalance]=useState(cookies.get('balance'));
  const [transarr,settransarr]=useState(cookies.get('transactions'));
  const [sent,setsent]=useState(cookies.get('sent'));
  const [received,setreceived]=useState(cookies.get('received'));
  const [linedata,setlinedata]=useState(cookies.get('linedata'));

  

  if(!auth){
  return(
 
    <Box>
    <Infobar/>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Feed/>}/>
        <Route path="/register" exact element={<Register/>}/>
        <Route path="/login" exact element={<Login auth={auth} setauth={setauth}/>}/>

      </Routes>
      <Footer/>
    </Box>
 
  )
  }
  else{
    return( 
      <ColorMOdeContext.Provider value={colorMode}>
      <ThemeProvider theme = {theme}>
        <CssBaseline/>
        <div className='app'>
           <div className='sidebar'>
            <Sidebar isSidebar={isSidebar} setauth={setauth}/>   
            </div>
          <main className='content'>
            {/* <BrowserRouter> */}
            <Topbar setIsSidebar={setIsSidebar}/>
             <Routes>
              <Route path="/" element={<Dashboard 
              balance={balance} 
              sent={sent} 
              received={received} 
              transarr={transarr}
              linedata={linedata}
              setbalance={setbalance}
              settransarr={settransarr}
              setsent={setsent}
              setreceived={setreceived}
              setlinedata={setlinedata}  
              />}/>
              <Route path="/payment" element={<Payments/>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/balance" element={<Invoice/>}/>
              <Route path="/calander" element={<Calander/>}/>
              <Route path="/faq" element={<Faq/>}/>
              <Route path="/bar" element={<Bar 
              balance={balance} 
              sent={sent} 
              received={received} 
              />}/>
              <Route path="/line" element={<Line linedata={linedata}/>}/>
              </Routes>
          {/* </BrowserRouter> */}
          </main>
        </div>
      </ThemeProvider>
    </ColorMOdeContext.Provider>
    )
  }
}

export default App;
