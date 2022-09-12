import Grid from "@mui/material/Grid";
import usePrincipal from "../../business/principal";
import './principal.css'
import {Box, Typography} from "@mui/material";

export const ViewPrincipal = props => {

    const hook = usePrincipal()

    const stl_options = {height: "33vh",pt:2,pl:2,color:"white", fontSize:"7em",textShadow:"0 0 3px #1976d2, 0 0 5px #0000FF"}
    return (
        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", height: "100%", flexGrow: 1, mt: 8}}>
            <Grid container style={{cursor: 'pointer'}}>
                <Grid container onClick={(e) => hook.goToPrediction()}
                      className='prediction-bkg'  sx={stl_options}>
                    Predicción
                </Grid>
                <Grid container onClick={(e) => hook.goToHistory()}
                      className='history-bkg' sx={stl_options}>
                    Historial
                </Grid>
                <Grid container>
                    <Grid item xs={8} onClick={(e) => hook.goToTutorial()}
                          className='tutorial-bkg' sx={stl_options}>
                        Tutorial
                    </Grid>
                    <Grid item xs={4} onClick={(e) => hook.goToOptions()}
                          className='option-bkg' sx={stl_options}>
                        Opciones
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}