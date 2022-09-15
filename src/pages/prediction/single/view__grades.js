import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {MBA_TYPES} from "../../../util/constants";

export const ViewGrades = props =>{

    const loadMBAType = () => {
        let type = MBA_TYPES.filter(t => t.id === props.grades.app_type)
        return type[0].name
    }

    return(
        <>
            <Grid container  justifyContent="center">
                <h3><strong>Posible puntaje:{parseFloat(props.result).toFixed(2)}</strong></h3>
            </Grid>
            <Grid container align="center" display={"column"} sx={{p: 2}}>
                <Grid container sx={{p: 2}} >
                    <Grid item xs={4}>GMAT</Grid>
                    <Grid item xs={4}>{props.grades.gmat}</Grid>
                    <Grid item xs={4}>obs1</Grid>
                </Grid>
                <Grid container sx={{p: 2}}>
                    <Grid item xs={4}>GPA</Grid>
                    <Grid item xs={4}>{props.grades.gpa}</Grid>
                    <Grid item xs={4}>obs2</Grid>
                </Grid>
                <Grid container sx={{p: 2}} >
                    <Grid item xs={4}>Experiencia Laboral</Grid>
                    <Grid item xs={4}>{props.grades.wk_xp}</Grid>
                    <Grid item xs={4}>obs3</Grid>
                </Grid>
                <Grid container sx={{p: 2}} justifyContent="center">
                    <Grid item xs={4}>Tipo MBA</Grid>
                    <Grid item xs={4}>{loadMBAType()}</Grid>
                    <Grid item xs={4} justifyContent="center">obs4</Grid>
                </Grid>
                <Grid container xs="12" justifyContent="center" sx={{mt:2}}>
                    <Button variant="contained" size="large"
                            onClick={(e) => props.exit(false)}>SALIR</Button>
                </Grid>
            </Grid>
        </>
    )
}