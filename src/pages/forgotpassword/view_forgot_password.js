import {Alert, Box, Button, Container, Grid, Paper, Stack, TextField, Typography} from "@mui/material";
import useLogin from "../../business/auth";
import {useForm} from 'react-hook-form';

const {ThemeProvider} = require("@mui/system");


function ForgotPassword() {
    const hook = useLogin();
    const {register, reset, formState: {errors}, handleSubmit} = useForm();
    const submit = (data) => {
        console.log(data)
    }
    const onclear = () => {
        reset();
    }
    return (

        <>
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
                                <Stack spacing={5}>
                                    <Grid container justifyContent="center">
                                        <Typography variant="h5" color="black">Recuperar Contraseña</Typography>
                                    </Grid>
                                    <Grid container justifyContent="center">
                                        <Typography variant="subtitle1" color="#808080">Ingrese su correo para enviar un
                                            correo de recuperación</Typography>
                                    </Grid>
                                    <Grid container justifyContent="center">
                                        <TextField label="Correo electronico" variant="filled" fullWidth
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
                                        <Button variant="contained" sx={{width: 180, borderRadius: 3}}
                                                onClick={hook.goToLogin}>
                                            Cancelar
                                        </Button>
                                        <Button variant="contained" sx={{width: 180, borderRadius: 3}} type="submit">
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


