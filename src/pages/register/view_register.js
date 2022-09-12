import {Paper, Grid, Typography, Stack, Button} from "@mui/material";
import useLogin from "business/auth";
import Estudiante from './images/Estudiante.png';
import Estudianteelegido from './images/Estudianteelegido.png';
import Reclutador from './images/Reclutador.png';
import Reclutadorelegido from './images/Reclutadorelegido.png';
import {useState} from "react";
import {USER_TYPES} from "../../util/constants";
import {useNavigate} from "react-router";
import routes from "../../router/routes";

export const ViewRegister = props => {
    const hook = useLogin();
    const navigate = useNavigate();

    return (<>
        <Paper elevation={10} sx={{minWidth: 600, borderRadius: 3, background: 'rgba(250, 250, 250, 0.9)'}}>
            <Stack spacing={6}>
                <div>
                    <Grid container justifyContent="center">
                        <Typography variant="h2"> Registro</Typography>
                    </Grid>
                    <Grid container justifyContent="center">
                        <Typography variant="h6"> Seleccione un rol para continuar</Typography>
                    </Grid>
                </div>
                <Grid container justifyContent="center">
                    <Stack direction={"row"} spacing={3}>
                        <div>
                            <img
                                className='RegisterLogo'
                                src={props.userType=== USER_TYPES.RECRUITER ? Reclutadorelegido : Reclutador}
                                alt="Reclutador"
                                onClick={(e) => props.setUserType(USER_TYPES.RECRUITER)}
                            ></img>
                            <Grid container justifyContent="center">
                                <p>Reclutador</p>
                            </Grid>
                        </div>
                        <div>
                            <img
                                className='RegisterLogo'
                                src={props.userType===  USER_TYPES.STUDENT? Estudianteelegido : Estudiante}
                                alt="Estudiante"
                                onClick={(e) => props.setUserType(USER_TYPES.STUDENT)}
                            ></img>
                            <Grid container justifyContent="center">
                                <p>Estudiante</p>
                            </Grid>
                        </div>
                    </Stack>
                </Grid>
                <Grid container justifyContent="center">
                    <Stack direction={"row"} spacing={18}>
                        <div>
                            <Grid container justifyContent="center">
                                <Button variant="contained" onClick={hook.goToLogin}>Cancelar</Button>
                            </Grid>
                        </div>
                        <div>
                            <Grid container justifyContent="center">
                                <Button variant="contained" onClick={(e) => props.nextStep(true)}
                                        disabled={props.userType === undefined}>Siguiente</Button>
                            </Grid>
                        </div>
                    </Stack>
                </Grid>
            </Stack>
            &nbsp;&nbsp;
        </Paper>
    </>);
}