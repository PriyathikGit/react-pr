import * as React from 'react';
import { AppBar, Toolbar, Button, Stack } from '@mui/material';
import GridViewIcon from '@mui/icons-material/GridView';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';



const Navbar = () => {  
    return (
        <AppBar sx={{margin:0,padding:0,height:"100vh",width:"16rem",left:0,bgcolor:"rgb(39, 24, 124)"}}>
          <Toolbar sx={{alignItems:"center",flexDirection:"column",p:"1rem"}}>
            <Stack  sx={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:"14rem",p:"8px"}}>
            <GridViewIcon/>
            <Link to="/" style={{color:"white"}}><Button color="inherit">Dashboard</Button></Link>
            </Stack>
            <Stack sx={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:"14rem",p:"8px"}}>
            <BusinessCenterIcon/>
            <Button color="inherit">Manage Subscription</Button>
            </Stack>
            <Stack sx={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:"14rem",p:"8px"}}>
            <BusinessCenterIcon/>
            <Button color="inherit">Young Brain</Button>
            </Stack>
            <Stack sx={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:"14rem",p:"8px"}}>
            <BusinessCenterIcon/>
            <Button color="inherit">Mid Career</Button>
            </Stack>
            <Stack sx={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:"14rem",p:"8px"}}>
            <BusinessCenterIcon/>
            <Button color="inherit">Vendor</Button>
            </Stack>
            <Stack sx={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:"14rem",p:"8px"}}>
            <BusinessCenterIcon/>
            <Button color="inherit">Consultant</Button>
            </Stack>
            <Stack sx={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:"14rem",p:"8px"}}>
            <GridViewIcon/>
            <Button color="inherit">Reports</Button>
            </Stack>
            <Stack sx={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:"14rem",p:"8px"}}>
            <LogoutIcon/>
            <Button color="inherit">Sign Out</Button>
            </Stack>
            
          </Toolbar>
        </AppBar>
      );
}

export default Navbar
