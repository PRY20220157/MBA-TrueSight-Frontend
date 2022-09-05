import Grid from "@mui/material/Grid";
import {PredictionContext, usePredictionContext} from "business/prediction/single/context";
import Button from "@mui/material/Button";
import {Box, Paper} from "@mui/material";
import {CompCoverPage} from "../../../comps/comp_cover_page";

export const ViewResult = props => {

    const {grades, result, setShowResult} = usePredictionContext();
    return (
        <div className="singleprediction-container">
            <CompCoverPage>

                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    minHeight="100vh"
                >
                    <Paper elevation={10} sx={{minWidth: 600, borderRadius: 8, background: 'rgba(250, 250, 250, 0.9)'}}>
                        <Grid container sx={{p: 2, justifyContent: 'center'}}>
                            <Grid item><h5><strong>Posible puntaje:{result}</strong></h5></Grid>
                            <Grid item xs={12}>Análisis de Puntajes</Grid>
                            <Grid container sx={{p: 2}}>
                                <Grid item xs={6}>GMAT: {grades.gmat}</Grid>
                                <Grid item xs={6}>obs1</Grid>
                            </Grid>
                            <Grid container sx={{p: 2}}>
                                <Grid item xs={6}>GPA: {grades.gpa}</Grid>
                                <Grid item xs={6}>obs2</Grid>
                            </Grid>
                            <Grid container sx={{p: 2}}>
                                <Grid item xs={6}>Años de Experiencia: {grades.wk_xp}</Grid>
                                <Grid item xs={6}>obs3</Grid>
                            </Grid>
                            <Grid container sx={{p: 2}}>
                                <Grid item xs={6}>Tipo de app: {grades.app_type}</Grid>
                                <Grid item xs={6}>obs4</Grid>
                            </Grid>
                            <Grid container xs="12">
                                <Button variant="contained" size="large"
                                        onClick={(e) => setShowResult(false)}>SALIR</Button>

                            </Grid>
                        </Grid>
                    </Paper>

                </Box>
            </CompCoverPage>

        </div>
    );
}