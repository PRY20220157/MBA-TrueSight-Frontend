import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {MBA_TYPES} from "util/constants";
import {Paper} from "@mui/material";
import {CompGrade} from "comps/comp_grade";

export const ViewGrades = props => {

    const loadMBAType = () => {
        let type = MBA_TYPES.filter(t => t.id === props.grades.app_type)
        return type[0].name
    }

    return (
        <>
            <Grid container justifyContent="center">
                <h3><strong>Puntajes ingresados</strong></h3>
            </Grid>
            <Grid container>
                <CompGrade grade={props.grades.gmat} obs={'obs'} type={'GMAT'} size={3}/>
                <CompGrade grade={props.grades.gpa} obs={'obs'} type={'GPA'} size={3}/>
                <CompGrade grade={props.grades.wk_xp} obs={'obs'} type={'Experiencia Laboral'} size={3}/>
                <CompGrade grade={loadMBAType()} obs={'obs'} type={'Tipo de MBA'} size={3}/>
            </Grid>
            <Grid container justifyContent="center" sx={{mt: 2}}>
                <h1><strong>Posible puntaje:{parseFloat(props.result).toFixed(2)}</strong></h1>
            </Grid>
            <Grid container xs="12" justifyContent="center" sx={{mt: 2}}>
                <Button variant="contained" size="large"
                        onClick={(e) => props.exit(false)}>SALIR</Button>
            </Grid>
        </>
    )
}