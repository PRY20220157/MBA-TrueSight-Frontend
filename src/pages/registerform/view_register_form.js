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
import useLogin from "../../business/auth";
import routes from "../../router/routes";
import {useNavigate} from "react-router";
import {decryptWithAES} from "../../util/AES";

export const ViewRegisterForm = props => {


    const {register, reset, formState: {errors}, handleSubmit, watch} = useForm();
    const hook = useLogin();
    const navigate = useNavigate();
    const [open, setOpen] = React.useState(false);
    const watchPassword = watch("Password", false);

    const onSubmit = (data) => {
        let acc = {
            email: data.Email,
            userTypeId: decryptWithAES(props.userType),
            password: data.Password,
            re_password: data.RepeatPassword
        }
        let info = {
            countryId:2,
            universityId:1,
            firstName: data.Nombre,
            lastName:data.Apellidos
        }
        console.log(acc)
        console.log(info)
        setOpen(true);
    }
    return (<>


        <Paper elevation={10} sx={{minWidth: 600, borderRadius: 3, background: 'rgba(250, 250, 250, 0.9)'}}>
            <Stack spacing={5}>
                <Grid container justifyContent="center">
                    <Typography variant="h2"> Registro</Typography>
                </Grid>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid container justifyContent="center">
                        <TextField variant="filled" label="Usuario" margin="normal" sx={{minWidth: 450}}
                                   {...register('Usuario', {
                                       required: true,
                                   })}
                                   error={errors.Usuario?.type === 'required'}
                                   helperText={errors.Usuario?.type === 'required' && "Usuario requerido"}
                        ></TextField>
                    </Grid>
                    <Grid container justifyContent="center">
                        <TextField variant="filled" label="Nombre" margin="normal"
                                   {...register('Nombre', {
                                       required: true,
                                   })}
                                   error={errors.Nombre?.type === 'required'}
                                   helperText={errors.Nombre?.type === 'required' && "Nombre requerido"}
                        ></TextField>
                        &nbsp;&nbsp;
                        <TextField variant="filled" label="Apellidos" margin="normal"
                                   {...register('Apellidos', {
                                       required: true,
                                   })}
                                   error={errors.Apellidos?.type === 'required'}
                                   helperText={errors.Apellidos?.type === 'required' && "Apellidos son  requeridos"}
                        ></TextField>

                    </Grid>
                    <Grid container justifyContent="center">
                        <TextField variant="filled" label="Correo" margin="normal" type={"email"} sx={{minWidth: 450}}
                                   {...register('Email', {
                                       required: true,
                                       pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                                   })}
                                   error={errors.Email?.type === 'required' || errors.Email?.type === 'pattern'}
                                   helperText={errors.Email?.type === 'required' && "Email requerida" || errors.Email?.type === 'pattern' && "No es un email"}
                        ></TextField>
                    </Grid>
                    <Grid container justifyContent="center">
                        <TextField variant="filled" label="Contraseña" margin="normal" type={"password"}
                                   sx={{minWidth: 450}}
                                   {...register('Password', {
                                       required: true,

                                   })}
                                   error={errors.Password?.type === 'required'}
                                   helperText={errors.Password?.type === 'required' && "Contraseña requerida"}
                        ></TextField>
                    </Grid>
                    <Grid container justifyContent="center">
                        <TextField variant="filled" label="Repetir Contraseña" margin="normal" type={"password"}
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
                        <Button variant="contained" size="large" onClick={(e) => navigate(routes.SIGN_IN)}>Cancelar</Button>
                        <Button variant="contained" size="large" type="submit">Registrarme</Button>
                    </Grid>
                    &nbsp;&nbsp;
                </form>
                <Dialog
                    open={open}
                >
                    <Grid container justifyContent="center">
                        <Typography variant="h3"> Registro</Typography>
                    </Grid>
                    <DialogContent>
                        <DialogContentText>
                            Se ha enviado un correo de verificación al correo registrado
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Grid container justifyContent="center">
                            <Button variant="contained" onClick={hook.goToLogin}> Continuar</Button>
                        </Grid>
                    </DialogActions>
                </Dialog>
            </Stack>
        </Paper>
    </>);
}