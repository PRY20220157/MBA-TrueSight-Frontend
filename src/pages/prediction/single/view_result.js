import Grid from "@mui/material/Grid";

export const ViewResult = props => {
    return(
        <Grid container sx={{p: 2, justifyContent: 'center'}}>
            <Grid item><h5><strong>Porcentaje de Éxito:{props.successNumber}</strong></h5></Grid>
            <Grid item xs={12}>Análisis de Puntajes</Grid>
            <Grid container sx={{p: 2}}>
                <Grid item xs={6}>puntaje1</Grid>
                <Grid item xs={6}>obs1</Grid>
            </Grid >
            <Grid container sx={{p: 2}}>
                <Grid item xs={6} >puntaje2</Grid>
                <Grid item xs={6}>obs2</Grid>
            </Grid>
            <Grid container sx={{p: 2}}>
                <Grid item xs={6}>puntaje3</Grid>
                <Grid item xs={6}>obs3</Grid>
            </Grid>
            <Grid container sx={{p: 2}}>
                <Grid item xs={6}>puntaje4</Grid>
                <Grid item xs={6}>obs4</Grid>
            </Grid>
        </Grid>
    );
}