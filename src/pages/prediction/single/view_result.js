import Grid from "@mui/material/Grid";
import {PredictionContext, usePredictionContext} from "business/prediction/context";

export const ViewResult = props => {
    const {grades} = usePredictionContext();
    return(
        <Grid container sx={{p: 2, justifyContent: 'center'}}>
            <Grid item><h5><strong>Porcentaje de Éxito:{props.successNumber}</strong></h5></Grid>
            <Grid item xs={12}>Análisis de Puntajes</Grid>
            <Grid container sx={{p: 2}}>
                <Grid item xs={6}>GMAT: {grades.gmat}</Grid>
                <Grid item xs={6}>obs1</Grid>
            </Grid >
            <Grid container sx={{p: 2}}>
                <Grid item xs={6} >GPA: {grades.gpa}</Grid>
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
        </Grid>
    );
}