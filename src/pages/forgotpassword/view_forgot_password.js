import {
    Alert,
    Box,
    Button,
    Container,
    Dialog, DialogActions,
    DialogContent, DialogContentText,
    Grid,
    Paper,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import useAuth from "../../business/auth";
import {useForm} from 'react-hook-form';
import * as React from "react";
import {toast, ToastContainer} from "react-toastify";
import {useEffect} from "react";
import {COLOR_SEC} from "../../util/constants";

const {ThemeProvider} = require("@mui/system");


function ForgotPassword() {
    const hook = useAuth();
    const {register, reset, formState: {errors}, handleSubmit} = useForm();
    const submit = (data) => {
        console.log(data)
    }
    const onclear = () => {
        reset();
    }
    useEffect(() => {
        if (hook.showAlert) {
            toast['error'](hook.alertContent, {
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

        <>
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
            <Dialog
                open={hook.open}
            >
                <DialogContent>
                    <DialogContentText>
                        Si el correo ingresado se encuentra registrado en nuestra base de datos, recibirá un correo
                        con un enlace para continuar con el restablecimiento de su contraseña.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Grid container justifyContent="center">
                        <Button variant="contained" onClick={hook.goToLogin} sx={{backgroundColor:COLOR_SEC}}>Ok</Button>
                    </Grid>
                </DialogActions>
            </Dialog>
            <div className="background">
                <Container sx={{minWidth: '100% !important', height: '100vh'}}>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        minHeight="100vh">
                        <Paper elevation={10}
                               sx={{minWidth: 600, borderRadius: 8, background: 'rgba(250, 250, 250, 0.9)', p:3}}>
                            <form onSubmit={handleSubmit(hook.sendEmailResetPasswd)}>
                                <Stack spacing={3}>
                                    <Grid container justifyContent="center">
                                        <h3 style={{color:COLOR_SEC}}><strong>Recuperar Contraseña</strong></h3>
                                    </Grid>
                                    <Grid container justifyContent="center">
                                        <Typography variant="subtitle1" color="#808080">Ingrese su correo para enviar un
                                            correo de recuperación</Typography>
                                    </Grid>
                                    <Grid container justifyContent="center">
                                        <TextField label="Correo electronico" variant="outlined" fullWidth
                                                   {...register('Email', {
                                                       required: true,
                                                       pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                                                   })}
                                        ></TextField>
                                        &nbsp;&nbsp;
                                        {errors.Email?.type === 'pattern' &&
                                            <Alert severity="error">No es un email</Alert>}
                                        {errors.Email?.type === 'required' &&
                                            <Alert severity="error">Es requerido</Alert>}
                                    </Grid>
                                    <Grid container justifyContent="space-between">
                                        <Button variant="outlined" sx={{width: 180, borderRadius: 3}}
                                                onClick={hook.goToLogin}>
                                            Cancelar
                                        </Button>
                                        <Button variant="contained" sx={{width: 180, borderRadius: 3,backgroundColor:COLOR_SEC}} type="submit">
                                            Enviar
                                        </Button>
                                    </Grid>
                                </Stack>
                            </form>
                        </Paper>
                    </Box>
                </Container>
            </div>
        </>
    );


}

export default ForgotPassword;


