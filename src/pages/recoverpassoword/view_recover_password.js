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
import {useForm} from 'react-hook-form';
import {useParams} from "react-router";
import useAuth from "../../business/auth";
import {toast, ToastContainer} from "react-toastify";
import * as React from "react";
import {useEffect} from "react";
import {COLOR_SEC} from "../../util/constants";

function RecoverPassword(props) {

    const {register, reset, formState: {errors}, handleSubmit, watch} = useForm();
    const watchShowAge = watch("NewPassword", false);
    const hook = useAuth()
    const submit = (data) => {
        console.log(data)
    }
    const onclear = () => {

    }
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

        <>
            <Dialog open={hook.open}>
                <DialogContent>
                    <DialogContentText>
                        Su contraseña fue cambiada con éxito
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Grid container justifyContent="center">
                        <Button variant="contained" onClick={hook.goToLogin}>Ok</Button>
                    </Grid>
                </DialogActions>
            </Dialog>
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
            <div className="background">
                <Container sx={{minWidth: '100% !important', height: '100vh',p:3}}>
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignContent={'center'}
                        alignItems="center"
                    height={"100%"}>
                        <Paper elevation={10}
                               sx={{width: "35%", borderRadius: 8, background: 'rgba(250, 250, 250, 0.9)',p:3}}>
                            <form onSubmit={handleSubmit(hook.resetPassword)}>
                                <Stack spacing={3}>
                                    <Grid container justifyContent="center">
                                        <h2 style={{color:COLOR_SEC}}>Restablecer Contraseña</h2>
                                    </Grid>
                                    <TextField label="Nueva Contraseña" variant="outlined" fullWidth type="password"
                                               {...register('NewPassword', {
                                                   required: true,

                                               })}
                                    ></TextField>
                                    &nbsp;&nbsp;
                                    {errors.NewPassword?.type === 'required' &&
                                        <Alert severity="error">Es requerido</Alert>}
                                    <Grid container justifyContent="center">
                                        <TextField label="Repetir Contraseña" variant="outlined" fullWidth type="password"
                                                   {...register('RepeatPassword', {
                                                       required: true,
                                                       validate: value => value === watchShowAge
                                                   })}
                                        ></TextField>
                                    </Grid>
                                    &nbsp;&nbsp;
                                    {errors.RepeatPassword?.type === 'required' &&
                                        <Alert severity="error">Es requerido</Alert>}
                                    {errors.RepeatPassword?.type === 'validate' &&
                                        <Alert severity="error">Los campos deben ser iguales</Alert>}
                                    <Grid container justifyContent="space-between">
                                        <Button variant="outlined" sx={{width: 180, borderRadius: 3}}
                                                onClick={onclear}>
                                            Cancelar
                                        </Button>
                                        <Button variant="contained" sx={{width: 180, borderRadius: 3, backgroundColor:COLOR_SEC}}  type={'submit'} >
                                            Restablecer
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

export default RecoverPassword;