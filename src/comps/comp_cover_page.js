import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import {AccountCircle, HomeRounded, Logout,} from "@mui/icons-material";
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import CalculateIcon from '@mui/icons-material/Calculate';
import UpdateIcon from '@mui/icons-material/Update';
import TuneIcon from '@mui/icons-material/Tune';
import routes from "../router/routes";
import {useLocation, useNavigate} from "react-router";
import BarLogo from './images/BarLogo.png'
import {useEffect} from "react";
import { color, width } from '@mui/system';
import './comp_cover_page.css'
const drawerWidth = '15%';

export const CompCoverPage = (props) => {

    useEffect(() => {
        console.log("AAAAAAA")
    }, []);
    const navigate = useNavigate();
    const location = useLocation();

    const handleSelected = (route) => {
        if (location.pathname === route)
            return '#A09090'
    }

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar position="fixed" sx={{zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor:'#85B0F1'}}>
                <Toolbar>
                <img className='imglogo' sx={{mr : 2, cursor:'pointer'}} onClick={(e)=> navigate(routes.PRINCIPAL)}
                    src={BarLogo}/>
                     &nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;
                    <Typography className='typo'    color="black" variant="h6" component="div" sx={{ flexGrow: 1, cursor:'pointer' }}
                                onClick={(e)=> navigate(routes.PRINCIPAL)}>
                        MBA True Sight
                    </Typography>
                    <AccountCircle htmlColor='black' fontSize="large"/>
                    &nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;
                   
                    <Logout htmlColor='black' fontSize="large" onClick={(e)=> navigate(routes.SIGN_IN)}/>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {width: drawerWidth, boxSizing: 'border-box',backgroundColor:'#D9D9D9'},
                    display: props.display,
                }}
            >
                 &nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;
                <Toolbar/>
                <Box sx={{overflow: 'auto'}}>
                    <List>
                        <ListItem key={'prediction'} disablePadding onClick={(e) => navigate(routes.PREDICTION)}
                                  sx={{backgroundColor:handleSelected(routes.PREDICTION)}}>
                            <ListItemButton>
                                <ListItemIcon>< CalculateIcon/></ListItemIcon>
                                <ListItemText primary='Prediction'/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem key={'history'} disablePadding onClick={(e) => navigate(routes.HISTORY)}
                                  sx={{backgroundColor:handleSelected(routes.HISTORY)}}>
                            <ListItemButton>
                                <ListItemIcon>< UpdateIcon/></ListItemIcon>
                                <ListItemText primary='Historial'/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem key={'tutorial'} disablePadding onClick={(e) => navigate(routes.TUTORIAL)}
                                  sx={{backgroundColor:handleSelected(routes.TUTORIAL)}}>
                            <ListItemButton>
                                <ListItemIcon>< OndemandVideoIcon/></ListItemIcon>
                                <ListItemText primary='Tutorial'/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem key={'options'} disablePadding onClick={(e) => navigate(routes.OPTIONS)}
                                  sx={{backgroundColor:handleSelected(routes.OPTIONS)}}>
                            <ListItemButton>
                                <ListItemIcon><TuneIcon/></ListItemIcon>
                                <ListItemText primary='Opciones'/>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
            <Box component="main" sx={{flexGrow: 1, p: 3}}>
                <Toolbar/>
                {props.children}
            </Box>
        </Box>
    );
}
CompCoverPage.defaultProps = {
    display: ''
}
