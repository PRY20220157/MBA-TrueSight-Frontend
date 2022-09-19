import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {COLOR_SEC, GRADES_KEYS, MBA_TYPES} from "util/constants";
import {Paper} from "@mui/material";
import {CompGrade} from "comps/comp_grade";
import Box from "@mui/material/Box";
import {CompTooltipGrade} from "../../../comps/tooltips/comp_tooltip_gpa";

export const ViewGrades = props => {

    const loadMBAType = () => {
        let type = MBA_TYPES.filter(t => t.id === props.grades.app_type)
        return type[0].name
    }

    return (
        <>
            <Box sx={{display: "flex", justifyContent: "center", width: "500px", p: 3}}>
                <Grid container>
                    <Grid container justifyContent="center">
                        <h3 style={{color: COLOR_SEC}}><strong>Resultados</strong></h3>
                    </Grid>
                    <Grid container justifyContent="center" sx={{mt: 2}}>
                        <h4><strong>Posible puntaje:{parseFloat(props.result).toFixed(2)}</strong></h4>
                    </Grid>
                    <Grid container>
                        <CompGrade grade={props.grades.gmat} obs={'obs'} type={'GMAT'} size={12}
                                   tooltip={<CompTooltipGrade type={GRADES_KEYS.GMAT}/>}/>
                        <CompGrade grade={props.grades.gpa} obs={'obs'} type={'GPA'} size={12}
                                   tooltip={<CompTooltipGrade type={GRADES_KEYS.GPA}/>}/>
                        <CompGrade grade={props.grades.wk_xp} obs={'obs'} type={'Experiencia Laboral'} size={12}
                                   tooltip={<CompTooltipGrade type={GRADES_KEYS.WORk_EXP}/>}/>
                        <CompGrade grade={loadMBAType()} obs={'obs'} type={'Tipo de MBA'} size={12}
                                   tooltip={<CompTooltipGrade type={GRADES_KEYS.APP_TYPE}/>}/>
                    </Grid>
                    <Grid container xs="12" justifyContent="center" sx={{mt: 2}}>
                        <Button variant="contained" size="large"
                                onClick={(e) => props.exit(false)}>SALIR</Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
