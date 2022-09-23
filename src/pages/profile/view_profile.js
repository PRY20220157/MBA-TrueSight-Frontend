import {useForm} from "react-hook-form";
import Box from "@mui/material/Box";
import {Paper} from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import useUser from "../../business/user";
import {CircleLoader} from "react-spinners";
import {COLOR_LAIT_BLU, COLOR_SEC, GRADES_KEYS} from "../../util/constants";
import React from "react";
import {CompGrade} from "../../comps/comp_grade";
import {handleFloatGrades} from "../../business/prediction/obs_constants";
import {CompTooltipGrade} from "../../comps/tooltips/comp_tooltip_gpa";
import {useObservations} from "../../business/prediction/observations";
import {getDateTime} from "../../util/date";

export const ViewProfile = () => {
    const {register, reset, formState: {errors}, handleSubmit, watch} = useForm();

    const hook = useUser()
    const obsHook = useObservations()

    const styleFields = {width: "100%"}
    return (
        <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", flexGrow: 1,}}>
            <Paper elevation={10} sx={{
                padding: 4, width: "100%", borderRadius: 8, height: "95%",
                background: 'rgba(250, 250, 250, 0.9)', ml: 2, mr: 2, mt: 2, mb: 2
            }}>
                {
                    hook.loading ?
                        <Grid container justifyContent={"center"}>
                            <CircleLoader color='#1976d2' size={150}/>
                        </Grid>
                        :
                        <>
                            <Grid container spacing={2} display={'box'} justifyContent={'center'}>
                                <Grid item xs={12}><h3 style={{color: COLOR_SEC}}><strong>Información del
                                    Usuario</strong></h3></Grid>
                                <Paper elevation={10} sx={{
                                    padding: 2, width: "100%", borderRadius: 8,
                                    background: COLOR_LAIT_BLU
                                }}>
                                    <Grid container spacing={1} sx={{width: "100%"}}>
                                        <Grid item xs={4} display={'flex'} justifyContent={"center"}>
                                            <TextField variant="outlined" label="Nombre" margin="normal" type={"text"}
                                                       size='small' inputProps={
                                                {readOnly: true,}
                                            }
                                                       defaultValue={hook.info.name} sx={styleFields}/>
                                        </Grid>
                                        <Grid item xs={4} justifyContent={"center"}>
                                            <TextField variant="outlined" label="Apellidos" margin="normal"
                                                       type={"text"}
                                                       size='small'
                                                       inputProps={
                                                           {readOnly: true,}
                                                       }
                                                       defaultValue={hook.info.lastName} sx={styleFields}/>
                                        </Grid>
                                        <Grid item xs={4} justifyContent={"center"}>
                                            <TextField variant="outlined" label="Correo" margin="normal" type={"text"}
                                                       size='small' inputProps={
                                                {readOnly: true,}
                                            }
                                                       defaultValue={hook.info.email} sx={styleFields}/>
                                        </Grid>
                                        <Grid item xs={4} justifyContent={"center"}>
                                            <TextField variant="outlined" label="Tipo de cuenta" margin="normal"
                                                       type={"text"}
                                                       size='small'
                                                       inputProps={
                                                           {readOnly: true,}
                                                       }
                                                       defaultValue={hook.info.userType} sx={styleFields}/>
                                        </Grid>
                                        <Grid item xs={4} justifyContent={"center"}>
                                            <TextField variant="outlined" label="País" margin="normal" type={"text"}
                                                       size='small' inputProps={
                                                {readOnly: true,}
                                            }
                                                       defaultValue={hook.info.country} sx={styleFields}/>
                                        </Grid>
                                        <Grid item xs={4} justifyContent={"center"}>
                                            <TextField variant="outlined" label="Universidad" margin="normal"
                                                       size='small'
                                                       type={"text"}
                                                       inputProps={
                                                           {readOnly: true,}
                                                       }
                                                       defaultValue={hook.info.university} sx={styleFields}/>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid container spacing={2} display={'box'} justifyContent={'center'} sx={{mt: 2, mb: 2}}>
                                <Grid item xs={12}><h3 style={{color: COLOR_SEC}}><strong>Estadísticas</strong></h3>
                                </Grid>
                            </Grid>
                            <Grid container spacing={2} display={'box'} justifyContent={'center'}>
                                <Grid item xs={6} display={'flex'} justifyContent={"center"} alignItems={'center'}>
                                    <Paper elevation={10} sx={{
                                        padding: 2, width: "100%", borderRadius: 3, height: "100%",
                                        background: COLOR_LAIT_BLU
                                    }}>
                                        <Grid container display={'flex'} justifyContent={"center"}
                                              alignItems={'center'}>
                                            <Grid item xs={10} display={'flex'} justifyContent={"center"}
                                                  alignItems={'center'}>
                                                <h5 style={{color: COLOR_SEC}}><strong>Número total de predicciones
                                                    realizadas</strong></h5>
                                            </Grid>
                                            <Grid item xs={2} display={'flex'} justifyContent={"center"}
                                                  alignItems={'center'}>
                                                <>&nbsp;</>
                                                <h1><strong>{hook.statistics.predNum}</strong></h1>
                                            </Grid>
                                        </Grid>

                                    </Paper>
                                </Grid>
                                <Grid item xs={6} display={'flex'} justifyContent={"center"} alignItems={'center'}>
                                    <Paper elevation={10} sx={{
                                        padding: 2, width: "100%", borderRadius: 3, height: "100%",
                                        background: COLOR_LAIT_BLU
                                    }}>
                                        <Grid container display={'flex'} justifyContent={"center"}
                                              alignItems={'center'}>
                                            <Grid item xs={10} display={'flex'} justifyContent={"center"}
                                                  alignItems={'center'}>
                                                <h5 style={{color: COLOR_SEC}}><strong>Número total de predicciones
                                                    realizadas en este mes</strong></h5>
                                            </Grid>
                                            <Grid item xs={2} display={'flex'} justifyContent={"center"}
                                                  alignItems={'center'}>
                                                <>&nbsp;</>
                                                <h1><strong>{hook.statistics.predNumThisMonth}</strong></h1>
                                            </Grid>
                                        </Grid>

                                    </Paper>
                                </Grid>
                                <Grid item xs={4} display={'flex'} justifyContent={"center"} alignItems={'center'}>
                                    <Paper elevation={10} sx={{
                                        padding: 2, width: "100%", borderRadius: 3, height: "100%",
                                        background: COLOR_LAIT_BLU
                                    }}>
                                        <Grid container display={'flex'} justifyContent={"center"}
                                              alignItems={'center'}>
                                            <Grid item xs={12} display={'flex'} justifyContent={"center"}
                                                  alignItems={'center'}>
                                                <h5 style={{color: COLOR_SEC}}><strong>Puntajes promedio</strong></h5>
                                            </Grid>
                                            <CompGrade
                                                grade={<>{handleFloatGrades(parseInt(hook.statistics.avgGmat), obsHook.avgs.gmatAvg, false)}</>}
                                                obs={'obs'} type={'GMAT'} size={12} showObs={false}
                                                tooltip={<CompTooltipGrade type={GRADES_KEYS.GMAT}/>}/>
                                            <CompGrade
                                                grade={<>{handleFloatGrades(parseFloat(hook.statistics.avgGpa).toFixed(2), obsHook.avgs.gpaAvg, false)}</>}
                                                obs={'obs'} type={'GPA'} size={12} showObs={false}
                                                tooltip={<CompTooltipGrade type={GRADES_KEYS.GPA}/>}/>
                                            <CompGrade
                                                grade={<>{handleFloatGrades(parseInt(hook.statistics.workExpAvg), obsHook.avgs.workExpAvg, true)}</>}
                                                type={'Años de Experiencia'} size={12} showObs={false} obs={'obs'}
                                                tooltip={<CompTooltipGrade type={GRADES_KEYS.WORk_EXP}/>}/>
                                            <CompGrade
                                                grade={<>{handleFloatGrades(parseFloat(hook.statistics.gradGpaAvg), obsHook.avgs.gradGpaAvg, false)}</>}
                                                type={'Posible Puntaje GPA'} size={12} showObs={false} obs={'obs'}
                                                tooltip={<CompTooltipGrade type={GRADES_KEYS.WORk_EXP}/>}/>
                                        </Grid>

                                    </Paper>
                                </Grid>
                                <Grid item xs={4} display={'flex'} justifyContent={"center"} alignItems={'center'}>
                                    <Paper elevation={10} sx={{
                                        padding: 2, width: "100%", borderRadius: 3, height: "100%",
                                        background: COLOR_LAIT_BLU
                                    }}>
                                        <Grid container display={'flex'} justifyContent={"center"}
                                              alignItems={'center'}>
                                            <Grid item xs={12} display={'flex'} justifyContent={"center"}
                                                  alignItems={'center'}>
                                                <h5 style={{color: COLOR_SEC,textAlign:"center"}}><strong>Predicción con mejor
                                                    resultado</strong></h5>
                                            </Grid>
                                            <CompGrade
                                                grade={<>{handleFloatGrades(parseInt(hook.statistics.maxGpaResult.gmatScore), obsHook.avgs.gmatAvg, false)}</>}
                                                obs={'obs'} type={'GMAT'} size={12} showObs={false}
                                                tooltip={<CompTooltipGrade type={GRADES_KEYS.GMAT}/>}/>
                                            <CompGrade
                                                grade={<>{handleFloatGrades(parseFloat(hook.statistics.maxGpaResult.gpaScore).toFixed(2), obsHook.avgs.gpaAvg, false)}</>}
                                                obs={'obs'} type={'GPA'} size={12} showObs={false}
                                                tooltip={<CompTooltipGrade type={GRADES_KEYS.GPA}/>}/>
                                            <CompGrade
                                                grade={<>{handleFloatGrades(parseInt(hook.statistics.workExpAvg), obsHook.avgs.workExpAvg, true)}</>}
                                                type={'Años de Experiencia'} size={12} showObs={false} obs={'obs'}
                                                tooltip={<CompTooltipGrade type={GRADES_KEYS.WORk_EXP}/>}/>
                                            <CompGrade
                                                grade={<>{handleFloatGrades(parseFloat(hook.statistics.maxGpaResult.gradGpaScore), obsHook.avgs.gradGpaAvg, false)}</>}
                                                type={'Posible Puntaje GPA'} size={12} showObs={false} obs={'obs'}
                                                tooltip={<CompTooltipGrade type={GRADES_KEYS.WORk_EXP}/>}/>
                                            <CompGrade grade={getDateTime(hook.statistics.maxGpaResult.creationDate)}
                                                       type={'Fecha realizada'} size={12} showObs={false}/>
                                        </Grid>

                                    </Paper>
                                </Grid>
                                <Grid item xs={4} display={'flex'} justifyContent={"center"} alignItems={'center'}>
                                    <Paper elevation={10} sx={{
                                        padding: 2, width: "100%", borderRadius: 3, height: "100%",
                                        background: COLOR_LAIT_BLU
                                    }}>
                                        <Grid container display={'flex'} justifyContent={"center"}
                                              alignItems={'center'}>
                                            <Grid item xs={12} display={'flex'} justifyContent={"center"}
                                                  alignItems={'center'}>
                                                <h5 style={{color: COLOR_SEC,textAlign:"center"}}><strong>Predicción con mejor resultado
                                                    realizada en el mes</strong></h5>
                                            </Grid>
                                            <CompGrade
                                                grade={<>{handleFloatGrades(parseInt(hook.statistics.maxGpaResultThisMonth.gmatScore), obsHook.avgs.gmatAvg, false)}</>}
                                                obs={'obs'} type={'GMAT'} size={12} showObs={false}
                                                tooltip={<CompTooltipGrade type={GRADES_KEYS.GMAT}/>}/>
                                            <CompGrade
                                                grade={<>{handleFloatGrades(parseFloat(hook.statistics.maxGpaResultThisMonth.gpaScore).toFixed(2), obsHook.avgs.gpaAvg, false)}</>}
                                                obs={'obs'} type={'GPA'} size={12} showObs={false}
                                                tooltip={<CompTooltipGrade type={GRADES_KEYS.GPA}/>}/>
                                            <CompGrade
                                                grade={<>{handleFloatGrades(parseInt(hook.statistics.workExpAvg), obsHook.avgs.workExpAvg, true)}</>}
                                                type={'Años de Experiencia'} size={12} showObs={false} obs={'obs'}
                                                tooltip={<CompTooltipGrade type={GRADES_KEYS.WORk_EXP}/>}/>
                                            <CompGrade
                                                grade={<>{handleFloatGrades(parseFloat(hook.statistics.maxGpaResultThisMonth.gradGpaScore), obsHook.avgs.gradGpaAvg, false)}</>}
                                                type={'Posible Puntaje GPA'} size={12} showObs={false} obs={'obs'}
                                                tooltip={<CompTooltipGrade type={GRADES_KEYS.WORk_EXP}/>}/>
                                            <CompGrade
                                                grade={getDateTime(hook.statistics.maxGpaResultThisMonth.creationDate)}
                                                type={'Fecha realizada'} size={12} showObs={false}/>
                                        </Grid>

                                    </Paper>
                                </Grid>
                            </Grid>
                        </>
                }
            </Paper>
        </Box>
    )
}