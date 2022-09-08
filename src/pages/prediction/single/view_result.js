import Grid from "@mui/material/Grid";
import {PredictionContext, usePredictionContext} from "business/prediction/single/context";
import Button from "@mui/material/Button";
import {Box, Paper} from "@mui/material";
import {CompCoverPage} from "../../../comps/comp_cover_page";

export const ViewResult = props => {

    const {grades, result, setShowResult} = usePredictionContext();
    return (
        <CompCoverPage>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="90vh"
                className="singleprediction-container"
            >
                <Paper  elevation={10} sx={{padding: 3,width: "50%", borderRadius: 8, background: 'rgba(250, 250, 250, 0.9)'}}>
                        <Grid container  justifyContent="center">
                            <h3><strong>Posible puntaje:{parseFloat(result).toFixed(2)}</strong></h3>
                        </Grid>
                    <Grid container align="center" display={"column"} sx={{p: 2}}>
                        <Grid container sx={{p: 2}} >
                            <Grid item xs={4}>GMAT</Grid>
                            <Grid item xs={4}>{grades.gmat}</Grid>
                            <Grid item xs={4}>obs1</Grid>
                        </Grid>
                        <Grid container sx={{p: 2}}>
                            <Grid item xs={4}>GPA</Grid>
                            <Grid item xs={4}>{grades.gpa}</Grid>
                            <Grid item xs={4}>obs2</Grid>
                        </Grid>
                        <Grid container sx={{p: 2}} >
                            <Grid item xs={4}>Experiencia Laboral</Grid>
                            <Grid item xs={4}>{grades.wk_xp}</Grid>
                            <Grid item xs={4}>obs3</Grid>
                        </Grid>
                        <Grid container sx={{p: 2}} justifyContent="center">
                            <Grid item xs={4}>Tipo MBA</Grid>
                            <Grid item xs={4}>{grades.app_type}</Grid>
                            <Grid item xs={4} justifyContent="center">obs4</Grid>
                        </Grid>
                        <Grid container xs="12" justifyContent="center" sx={{mt:2}}>
                            <Button variant="contained" size="large"
                                    onClick={(e) => setShowResult(false)}>SALIR</Button>
                        </Grid>
                    </Grid>
                </Paper>

            </Box>
        </CompCoverPage>
    );
}