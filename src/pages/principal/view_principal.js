import Grid from "@mui/material/Grid";
import {Navigate, useNavigate} from "react-router";
import usePrincipal from "../../business/principal";

export const ViewPrincipal = props => {

    const hook = usePrincipal()

    return (
        <>
            <Grid container spacing={2} style={{cursor:'pointer', minHeight:'100% !important'}}>
                <Grid item xs={12} onClick={(e) => hook.goToPrediction()}
                      sx={{backgroundColor:"green"}}>
                    Prediccion
                </Grid>
                <Grid item xs={12} onClick={(e) => hook.goToHistory()}
                      sx={{backgroundColor:"red"}}>
                    Historial
                </Grid>
                <Grid item xs={8} onClick={(e) => hook.goToTutorial()}
                      sx={{backgroundColor:"yellow"}}>
                    Tutorial
                </Grid>
                <Grid item xs={4} onClick={(e) => hook.goToOptions()}
                      sx={{backgroundColor:"blue"}}>
                    Opciones
                </Grid>
            </Grid>
        </>
    );
}