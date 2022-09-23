import {
    Paper,
    Grid,
    Typography,
    Stack,
    Button,
    TextField,
    Alert,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogActions
} from "@mui/material";
import * as React from 'react';
import {useForm} from 'react-hook-form';
import useAuth from "../../business/auth";
import routes from "../../router/routes";
import {useNavigate} from "react-router";
import {decryptWithAES} from "../../util/AES";
import {COLOR_SEC} from "../../util/constants";

export const ViewRegisterForm = props => {


    const {register, reset, formState: {errors}, handleSubmit, watch} = useForm();
    const hook = useAuth();
    const navigate = useNavigate();
    const watchPassword = watch("Password", false);

    const onSubmit = (data) => {
        let acc = {
            email: data.Email,
            userTypeId: decryptWithAES(props.userType),
            password: data.Password,
            re_password: data.RepeatPassword
        }
        let info = {
            countryId: 1,
            universityId: 1,
            firstName: data.Nombre,
            lastName: data.Apellidos
        }
        console.log(acc)
        console.log(info)
        hook.registerUser(acc, info)
    }
    return (<>

        <Paper elevation={10} sx={{minWidth: 600, borderRadius: 3, background: 'rgba(250, 250, 250, 0.9)',pt:2,pb:1}}>
            <Stack spacing={5}>
                <Grid container justifyContent="center">
                    <h2 style={{color:COLOR_SEC}} ><strong>Registro</strong></h2>
                </Grid>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container justifyContent="center">
                        <TextField variant="outlined" label="Nombre" margin="normal"
                                   {...register('Nombre', {
                                       required: true,
                                   })}
                                   error={errors.Nombre?.type === 'required'}
                                   helperText={errors.Nombre?.type === 'required' && "Nombre requerido"}
                        ></TextField>
                        &nbsp;&nbsp;
                        <TextField variant="outlined" label="Apellidos" margin="normal"
                                   {...register('Apellidos', {
                                       required: true,
                                   })}
                                   error={errors.Apellidos?.type === 'required'}
                                   helperText={errors.Apellidos?.type === 'required' && "Apellidos son  requeridos"}
                        ></TextField>

                    </Grid>
                    <Grid container justifyContent="center">
                        <TextField variant="outlined" label="Correo" margin="normal" type={"email"} sx={{minWidth: 450}}
                                   {...register('Email', {
                                       required: true,
                                       pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                                   })}
                                   error={errors.Email?.type === 'required' || errors.Email?.type === 'pattern'}
                                   helperText={errors.Email?.type === 'required' && "Email requerida" || errors.Email?.type === 'pattern' && "No es un email"}
                        ></TextField>
                    </Grid>
                    <Grid container justifyContent="center">
                        <TextField variant="outlined" label="Contraseña" margin="normal" type={"password"}
                                   sx={{minWidth: 450}}
                                   {...register('Password', {
                                       required: true,

                                   })}
                                   error={errors.Password?.type === 'required'}
                                   helperText={errors.Password?.type === 'required' && "Contraseña requerida"}
                        ></TextField>
                    </Grid>
                    <Grid container justifyContent="center">
                        <TextField variant="outlined" label="Repetir Contraseña" margin="normal" type={"password"}
                                   sx={{minWidth: 450}}
                                   {...register('RepeatPassword', {
                                       required: true,
                                       validate: value => value === watchPassword

                                   })}
                                   error={errors.RepeatPassword?.type === 'required' || errors.RepeatPassword?.type === 'validate'}
                                   helperText={errors.RepeatPassword?.type === 'required' && "Campo requerida" || errors.RepeatPassword?.type === 'validate' && "Debe ser igual"}
                        ></TextField>
                    </Grid>
                    &nbsp;&nbsp;
                    <Grid container justifyContent={"space-around"}>
                        <Button variant="outlined" size="large"
                                onClick={(e) => navigate(routes.SIGN_IN)} sx={{color:COLOR_SEC}}>Cancelar</Button>
                        <Button variant="contained" size="large" type="submit" sx={{backgroundColor:COLOR_SEC}}>Registrarme</Button>
                    </Grid>
                    &nbsp;&nbsp;
                </form>
                <Dialog
                    open={hook.open}
                >
                    <Grid container justifyContent="center">
                        <Typography variant="h3" sx={{color:COLOR_SEC}}> Registro</Typography>
                    </Grid>
                    <DialogContent>
                        <DialogContentText>
                            Se ha enviado un correo de activación de cuenta al correo registrado
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Grid container justifyContent="center">
                            <Button variant="contained" onClick={hook.goToLogin} sx={{backgroundColor:COLOR_SEC}}>Ir a LogIn</Button>
                        </Grid>
                    </DialogActions>
                </Dialog>
            </Stack>
        </Paper>
    </>);
}