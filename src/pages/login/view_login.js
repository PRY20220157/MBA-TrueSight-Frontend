import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import { Stack } from '@mui/material';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import useLogin from "../../business/login";
import './view_login.css'
const theme = createTheme();

export const ViewLogin = () => {

    const hook = useLogin();

    return (
        <ThemeProvider theme={theme}>
            <Container sx={{minWidth: '100% !important',height: '120vh', backgroundColor: '#C8102E',}} >
                <Container component="main" maxWidth="xs" sx={{height: '110vh', backgroundColor: '#ffffff',paddingTop:'25vh'}}>
                    <CssBaseline/>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            alignContent:'center',
                            justifyContent:"center",
                            direction:'column'
                        }}
                    >
                        
                       

                        <img className='TrueSightLoginLogo'
                           src="https://cdn.discordapp.com/attachments/1008578351251861624/1010680041920790558/Logo.png"
                           alt="TrueSightLoginLogo"
                           >
                        </img>

                        <Box component="form" onSubmit={hook.handleSubmit} noValidate
                             sx={{mt: 1}}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <Button
                                // type="submit"
                                fullWidth
                                variant="contained"
                                size="large"
                                sx={{mt: 3, mb: 2}}
                                onClick={hook.goToPrincipalPage}
                            >
                                Log In
                            </Button>
                           
                            <Stack  justifyContent="center" spacing={2} align='center'>
                                    <Link href="#" variant="body2" justifyContent="center">
                                        Forgot password?
                                    </Link>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>

                            </Stack>
                            


                            
                        </Box>
                    </Box>
                </Container>
            </Container>
        </ThemeProvider>
    );
}