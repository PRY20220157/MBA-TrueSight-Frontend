import {Alert, alpha, Card, MenuItem, Paper, Select, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import '../single/stylesheet/view_single_form.css'
import {usePrediction} from "business/prediction/single/prediction";
import "./single_prediction.css"
import Box from "@mui/material/Box";
import {useForm} from 'react-hook-form';
import {CompCoverPage} from "comps/comp_cover_page";
import {useEffect, useState} from "react";
import {CircleLoader, ClipLoader, GridLoader} from "react-spinners";
import {COLOR_SEC, GRADES_KEYS, MBA_TYPES} from "util/constants";
import {CompTooltipGrade} from "../../../comps/tooltips/comp_tooltip_grade";

export const ViewSingleForm = () => {

    const hookPrediction = usePrediction()
    const {register, reset, formState: {errors}, handleSubmit, setError} = useForm({criteriaMode: "all"});
    const [errorGmatMsg, setErrorGmatMsg] = useState('');
    const onClear = () => {
        reset();
    }
    useEffect(() => {
        validateGmat()
    }, [errors.gmat]);

    const validateGmat = () => {
        if (errors.gmat !== undefined) {
            if (errors.gmat.types.required) setErrorGmatMsg("Por favor ingrese este campo");
            if (errors.gmat.types.max) setErrorGmatMsg("El maximo puntaje permitido es 800")
        } else {
            setErrorGmatMsg('Ejemplo: 700')
        }
    }

    return (

        <Box sx={{
            display: "flex", justifyContent: "center", width: "500px",
            p: 3
        }}>
            {
                hookPrediction.loading ?
                    <Grid container justifyContent={"center"}>
                        <CircleLoader color='#1976d2' loading={hookPrediction.loading} size={150}/>
                    </Grid>
                    :
                    <form onSubmit={handleSubmit(hookPrediction.onSubmit)}>
                        <Grid container justifyContent={"center"}>
                            <h4 style={{color:"#3966ff"}}><strong>Predicción de Éxito en MBA</strong></h4>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12} display={'flex'} justifyContent={"center"}>
                                <TextField required label="GMAT" margin="normal" type={"number"} size="small"
                                           inputProps={{min: 0}}
                                           {...register('gmat', {
                                               required: true,
                                               max: 800
                                           })}
                                           sx={{width: "100%","& .MuiOutlinedInput-root.Mui-focused": {
                                                   "& > fieldset": {
                                                       borderColor: COLOR_SEC
                                                   }}
                                }}
                                           error={errors.gmat !== undefined}
                                           helperText={errorGmatMsg}
                                />
                                <Grid item display={'flex'} justifyContent={"center"} alignItems={"center"}
                                      sx={{ml: 1}}>
                                    <CompTooltipGrade type={GRADES_KEYS.GMAT}/>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} display={'flex'} justifyContent={"center"}>
                                <TextField required label="GPA" margin="normal" type={"number"} size="small"
                                           inputProps={{step: 0.1, min: 0}}
                                           {...register('gpa', {
                                               required: true,
                                               min: 0,
                                               max:4
                                           })}
                                           sx={{width: "100%","& .MuiOutlinedInput-root.Mui-focused": {
                                                   "& > fieldset": {
                                                       borderColor: COLOR_SEC
                                                   }}
                                           }}
                                           error={errors.gpa !== undefined}
                                           helperText={ errors.gpa?.type === 'required' ? 'Por favor ingrese este campo' : 'Ejemplo:4'}
                                />
                                <Grid item display={'flex'} justifyContent={"center"} alignItems={"center"}
                                      sx={{ml: 1}}>
                                    <CompTooltipGrade type={GRADES_KEYS.GPA}/>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} display={'flex'} justifyContent={"center"}>
                                <TextField required label="Experiencia Laboral" margin="normal" size="small"
                                           sx={{width: "100%","& .MuiOutlinedInput-root.Mui-focused": {
                                                   "& > fieldset": {
                                                       borderColor: COLOR_SEC
                                                   }}
                                           }}
                                           inputProps={{min: 0}} type={"number"}
                                           {...register('wk_xp', {
                                               required: true,
                                               min: 0,
                                               valueAsNumber: true
                                           })}
                                           error={errors.wk_xp !== undefined}
                                           helperText={errors.wk_xp?.type === 'required' ? 'Por favor ingrese este campo' : '*Tiempo en años'}
                                ></TextField>
                                <Grid item display={'flex'} justifyContent={"center"} alignItems={"center"}
                                      sx={{ml: 1}}>
                                    <CompTooltipGrade type={GRADES_KEYS.WORk_EXP}/>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} display={'flex'} justifyContent={"center"}>
                                <TextField
                                    size="small"
                                    select
                                    required
                                    label="Tipo de MBA"
                                    margin="normal"
                                    inputProps={register('app_type', {
                                        required: true,
                                    })}
                                    sx={{width: "100%","& .MuiOutlinedInput-root.Mui-focused": {
                                            "& > fieldset": {
                                                borderColor: COLOR_SEC
                                            }}
                                    }}
                                    error={errors.app_type !== undefined}
                                    helperText={errors.app_type?.type === 'required' ? 'Por favor seleccione una opción' : ''}
                                >
                                    {MBA_TYPES.map((option) => (
                                        <MenuItem key={option.id} value={option.id}>
                                            {option.name}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <Grid item display={'flex'} justifyContent={"center"} alignItems={"center"}
                                      sx={{ml: 1}}>
                                    <CompTooltipGrade type={GRADES_KEYS.APP_TYPE}/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container justifyContent={"space-around"} sx={{mt: 3}}>
                            <Grid item>
                                <Button variant="outlined" size="large" onClick={onClear} sx={{color:"#3966ff",borderColor:"#3966ff"}}>Limpiar</Button>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" size="large" type="submit" sx={{backgroundColor:COLOR_SEC}}>Predecir</Button>
                            </Grid>
                        </Grid>
                    </form>
            }
        </Box>

    );
}
