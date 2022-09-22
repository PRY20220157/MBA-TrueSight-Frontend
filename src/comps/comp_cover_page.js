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
import {color, width} from '@mui/system';
import './comp_cover_page.css'
import useAuth from "../business/auth";
import {LS_USER_TP, OWL_MBA_TS, USER_TYPES} from "../util/constants";
import {decryptWithAES} from "../util/AES";
import {isRecruiter} from "../util/util";

const drawerWidth = '15%';

export const CompCoverPage = (props) => {

    useEffect(() => {
        checkAccess()
    }, []);
    const navigate = useNavigate();
    const location = useLocation();
    const auth = useAuth();

    const handleSelected = (route) => {
        if (location.pathname === route)
            return '#F2F2F2'
    }

    const handleSelectedColor = (route) => {
        if (location.pathname === route)
            return '#04094A'
        else return '#ffffff'
    }

    const checkAccess = () => {
        let values = [],
            keys = Object.keys(localStorage),
            i = keys.length;
        if (i === 0) {
            navigate(routes.SIGN_IN)
        } else {
            while (i--) {
                values.push(localStorage.getItem(keys[i]));
                if (decryptWithAES(keys[i]) === decryptWithAES(OWL_MBA_TS)) {
                    if (localStorage.getItem(keys[i]) === null) {
                        navigate(routes.SIGN_IN)
                    }
                }
            }
        }
    }

    return (
        <Box sx={{display: 'flex', height: "100vh"}}>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        backgroundColor: '#04094A'
                    },
                    display: props.display,
                }}>
                <Box display={"inline-flex"} alignItems={'center'} justifyContent={'center'} sx={{mt: 2}}>
                    <img className='imglogo' style={{mr: 2, cursor: 'pointer'}}
                         onClick={(e) => navigate(routes.PRINCIPAL)}
                         src={BarLogo}/>
                    <Typography className='typo' color="white" variant="h5" component="div"
                                sx={{cursor: "pointer"}}
                                onClick={(e) => auth.handleLogout()}>
                        True Sight
                    </Typography>
                </Box>
                <Box sx={{overflow: 'auto'}}>
                    <List>
                        <ListItem key={'history'} disablePadding onClick={(e) => navigate(routes.HISTORY)}
                                  sx={{
                                      color: handleSelectedColor(routes.HISTORY),
                                      backgroundColor: handleSelected(routes.HISTORY)
                                  }}>
                            <ListItemButton>
                                <ListItemIcon>< UpdateIcon
                                    sx={{color: handleSelectedColor(routes.HISTORY)}}/></ListItemIcon>
                                <ListItemText primary='Predicciones'/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem key={'tutorial'} disablePadding onClick={(e) => navigate(routes.TUTORIAL)}
                                  sx={{
                                      color: handleSelectedColor(routes.TUTORIAL),
                                      backgroundColor: handleSelected(routes.TUTORIAL)
                                  }}>
                            <ListItemButton>
                                <ListItemIcon>< OndemandVideoIcon
                                    sx={{color: handleSelectedColor(routes.TUTORIAL)}}/></ListItemIcon>
                                <ListItemText primary='Tutorial'/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem key={'options'} disablePadding onClick={(e) => navigate(routes.OPTIONS)}
                                  sx={{
                                      color: handleSelectedColor(routes.OPTIONS),
                                      backgroundColor: handleSelected(routes.OPTIONS)
                                  }}>
                            <ListItemButton>
                                <ListItemIcon><TuneIcon
                                    sx={{color: handleSelectedColor(routes.OPTIONS)}}/></ListItemIcon>
                                <ListItemText primary='Opciones'/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem onClick={(e) => navigate(routes.PROFILE)} disablePadding
                                  sx={{
                                      color: handleSelectedColor(routes.PROFILE),
                                      backgroundColor: handleSelected(routes.PROFILE),
                                  }}>
                            <ListItemButton>
                                <ListItemIcon><AccountCircle
                                    sx={{color: handleSelectedColor(routes.PROFILE)}}/></ListItemIcon>
                                <ListItemText primary='Perfil del usuario'/>
                            </ListItemButton>
                        </ListItem>
                        <ListItem onClick={(e) => auth.handleLogout()} disablePadding sx={{color: "white"}}>
                            <ListItemButton>
                                <ListItemIcon><Logout sx={{color: "white"}}/></ListItemIcon>
                                <ListItemText primary='Cerrar Sesión'/>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>

            {props.children}
        </Box>
    );
}
CompCoverPage.defaultProps = {
    display: ''
}
