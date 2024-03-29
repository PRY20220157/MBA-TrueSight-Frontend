import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import {Alert, Paper, Stack} from '@mui/material';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import useAuth from "../../business/auth";
import './view_login.css'
import {useForm} from 'react-hook-form';
import LoginPhoto from './images/TrueSightLoginLogo.png'
import {ToastContainer, toast} from 'react-toastify';
import {useEffect} from "react";
import {COLOR_SEC} from "../../util/constants";
import {CircleLoader} from "react-spinners";

const theme = createTheme();

export const ViewLogin = () => {
    const {register, reset, formState: {errors}, handleSubmit} = useForm();
    const hook = useAuth();

    useEffect(() => {
        if (hook.showAlert) {
            toast.error(hook.alertContent, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            hook.setShowAlert(false)
        }
    }, [hook.showAlert]);
    return (
        <ThemeProvider theme={theme}>
            <ToastContainer
                theme="colored"
                position="top-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className='background'>
                <Container sx={{minWidth: '100% !important', height: '100vh'}}>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        minHeight="100vh"
                    >
                        <Paper elevation={10}
                               sx={{width: "30%", borderRadius: 8, background: 'rgba(250, 250, 250, 0.9)'}}>
                            <Stack spacing={2}>
                                &nbsp;&nbsp;
                                <Grid container justifyContent={"center"}>
                                    <img className='TrueSightLoginLogo'
                                         src={LoginPhoto}
                                         alt="TrueSightLoginLogo"
                                    >
                                    </img>
                                </Grid>
                                <form onSubmit={handleSubmit(hook.handleSubmit)}>

                                    <Grid container justifyContent={"center"} sx={{width: "100%"}}>
                                        <TextField variant="filled" label="Email" margin="normal" type={"email"}
                                                   sx={{width: "70%"}}
                                                   {...register('Email', {
                                                       required: true,
                                                       pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                                                   })}

                                        ></TextField>
                                    </Grid>
                                    &nbsp;&nbsp;

                                    {errors.Email?.type === 'pattern' && <Alert severity="error">No es un email</Alert>}
                                    {errors.Email?.type === 'required' && <Alert severity="error">Es requerido</Alert>}

                                    <Grid container justifyContent={"center"}>
                                        <TextField variant="filled" label="Password" margin="normal" type={"password"}
                                                   sx={{width: "70%"}}
                                                   {...register('Password', {
                                                       required: true,
                                                   })}
                                        >

                                        </TextField>
                                    </Grid>
                                    &nbsp;&nbsp;
                                    {errors.Password?.type === 'required' &&
                                        <Alert severity="error">Es requerido una contraseña</Alert>}
                                    &nbsp;&nbsp;
                                    <Grid container justifyContent={"center"}>
                                        {
                                            hook.loading ?
                                                <CircleLoader color='#1976d2' size={50}/> :

                                                <Button variant="contained" type='submit' size="large"
                                                        sx={{backgroundColor: COLOR_SEC}}>Log in </Button>
                                        }
                                    </Grid>

                                </form>
                                <Stack justifyContent="center" spacing={3} align='center'>
                                    <Link href="#" variant="body2" justifyContent="center"
                                          onClick={hook.goToForgotPasswordPage} sx={{color: COLOR_SEC}}>
                                        ¿Olvidó su contraseña?
                                    </Link>
                                    <Link href="#" variant="body2" onClick={hook.goToRegisterPage}
                                          sx={{color: COLOR_SEC}}>
                                        {"¿No tiene una cuenta? Regístrese aquí"}
                                    </Link>
                                </Stack>
                                &nbsp;&nbsp;
                            </Stack>
                        </Paper>
                    </Box>
                </Container>
            </div>
        </ThemeProvider>
    );
}
