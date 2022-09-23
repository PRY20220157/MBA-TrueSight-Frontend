import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import {COLOR_SEC, GRADES_KEYS, MBA_TYPES} from "util/constants";
import {Paper} from "@mui/material";
import {CompGrade} from "comps/comp_grade";
import Box from "@mui/material/Box";
import {CompTooltipGrade} from "../../../comps/tooltips/comp_tooltip_grade";
import {loadMBAType} from "../../../util/util";
import React, {useEffect} from "react";
import {useObservations} from "../../../business/prediction/observations";
import {handleFloatGrades} from "../../../business/prediction/obs_constants";

export const ViewGrades = props => {

    const hook = useObservations()
    const obsHook = useObservations()
    useEffect(() => {
        hook.getObservations(props.grades.gmat,props.grades.gpa,props.grades.wk_xp,props.grades.app_type,props.result)
    }, []);

    return (
        <>
            <Box sx={{display: "flex", justifyContent: "center", width: "500px", p: 3}}>
                <Grid container>
                    <Grid container justifyContent="center">
                        <h3 style={{color: COLOR_SEC}}><strong>Resultados</strong></h3>
                    </Grid>
                    <Grid container display={'flex'} justifyContent="center" sx={{mt: 2,textAlign:"center"}}>
                        <h4><strong>Posible puntaje a obtener en el GPA:{handleFloatGrades(parseFloat(props.result).toFixed(2), obsHook.avgs.gradGpaAvg, false)}</strong></h4>
                    </Grid>
                    <Grid container>
                        <CompGrade grade={<>{handleFloatGrades(parseInt(props.grades.gmat), obsHook.avgs.gmatAvg, false)}</>} showObs={false} type={'GMAT'} size={12}
                                   tooltip={<CompTooltipGrade type={GRADES_KEYS.GMAT}/>}/>
                        <CompGrade grade={<>{handleFloatGrades(parseFloat(props.grades.gpa).toFixed(2), obsHook.avgs.gpaAvg, false)}</>}
                                   showObs={false} type={'GPA'} size={12} tooltip={<CompTooltipGrade type={GRADES_KEYS.GPA}/>}/>
                        <CompGrade grade={<>{handleFloatGrades(parseInt(props.grades.wk_xp), obsHook.avgs.workExpAvg, true)}</>} size={12}
                                   type={'Exp. Laboral'} showObs={false}
                                   tooltip={<CompTooltipGrade type={GRADES_KEYS.WORk_EXP}/>}/>
                        <CompGrade grade={loadMBAType(props.grades.app_type)} showObs={false} type={'Tipo de MBA'} size={12}
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
