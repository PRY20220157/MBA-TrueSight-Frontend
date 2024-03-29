import {Paper, Grid, Typography, Stack, Button} from "@mui/material";
import useAuth from "business/auth";
import Estudiante from './images/Estudiante.png';
import Estudianteelegido from './images/Estudianteelegido.png';
import Reclutador from './images/Reclutador.png';
import Reclutadorelegido from './images/Reclutadorelegido.png';
import {useState} from "react";
import {COLOR_SEC, USER_TYPES} from "../../util/constants";
import {useNavigate} from "react-router";
import routes from "../../router/routes";
import * as React from "react";

export const ViewRegister = props => {
    const hook = useAuth();
    const navigate = useNavigate();

    return (<>
        <Paper elevation={10} sx={{minWidth: 600, borderRadius: 3, background: 'rgba(250, 250, 250, 0.9)',pt:2}}>
            <Stack spacing={4}>
                <div>
                    <Grid container justifyContent="center">
                        <h1 style={{color:COLOR_SEC}} ><strong>Registro</strong></h1>
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
                                <Button variant="outlined" onClick={hook.goToLogin} sx={{color:COLOR_SEC}}>Cancelar</Button>
                            </Grid>
                        </div>
                        <div>
                            <Grid container justifyContent="center">
                                <Button variant="contained" onClick={(e) => props.nextStep(true)}
                                        disabled={props.userType === undefined} sx={{backgroundColor:COLOR_SEC}}>Siguiente</Button>
                            </Grid>
                        </div>
                    </Stack>
                </Grid>
            </Stack>
            &nbsp;&nbsp;
        </Paper>
    </>);
}