import { Paper,Grid, Typography,Stack, Button } from "@mui/material";
import useLogin from "business/auth";
import Estudiante from './images/Estudiante.png';
import Estudianteelegido from './images/Estudianteelegido.png';
import Reclutador from './images/Reclutador.png';
import Reclutadorelegido from './images/Reclutadorelegido.png';
import { useState } from "react";
export const ViewRegister = props => {
    const hook = useLogin();
    const [reclutador,setReclutador] = useState(false)
    const [estudiante,setEstudiante] = useState(false)
    const seleccionreclutador=()=>{
        setReclutador(true)
        setEstudiante(false)
    }
    const seleccionestudiante=()=>{
        setReclutador(false)
        setEstudiante(true)
        console.log(estudiante)
    }
    const iraregistro=()=>{
       if(!reclutador && !estudiante){
          
       }else if(reclutador){
           hook.goToRegisterFormPage("reclutador")
       }
       else if(estudiante){
        hook.goToRegisterFormPage("estudiante")
       }

    }
    return(<>
         <Paper elevation={10} sx={{minWidth:600,borderRadius:3,background: 'rgba(250, 250, 250, 0.9)'}}>

             <Stack spacing={6}>
             <div>
             <Grid  container justifyContent="center">

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
                    src={reclutador ? Reclutadorelegido : Reclutador}
                    alt="Reclutador"
                    onClick={seleccionreclutador}
                    ></img>
                    <Grid container justifyContent="center">
                             <p>Reclutador</p>
                    </Grid>
                    
                    </div>
                    <div>
                    <img
                     className='RegisterLogo'
                     src={estudiante ? Estudianteelegido : Estudiante}
                      alt="Estudiante"
                      onClick={seleccionestudiante}
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
                             <Button variant="contained"  onClick={hook.goToLogin}>Cancelar</Button>
                    </Grid>
                    
                    </div>
                    <div>
                    <Grid container justifyContent="center">
                             <Button variant="contained" onClick={iraregistro}>Siguiente</Button>
                    </Grid>
                    </div>
                </Stack>
             </Grid>
             </Stack>
             &nbsp;&nbsp;

         </Paper>
    </>);
}