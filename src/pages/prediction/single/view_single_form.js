import {Alert, alpha, Card, Paper, Typography} from "@mui/material";
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

export const ViewSingleForm = () => {

    const hookPrediction = usePrediction()
    const {register, reset, formState: {errors}, handleSubmit, setError} = useForm({criteriaMode: "all"});
    const [errorGmatMsg, setErrorGmatMsg] = useState('');
    const onclear = () => {
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
            setErrorGmatMsg('')
        }
    }

    return (

        <CompCoverPage>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="90vh"
                className="singleprediction-container"
            >
                <Paper elevation={10}
                       sx={{padding: 4, width: "35%", borderRadius: 8, background: 'rgba(250, 250, 250, 0.9)'}}>
                    <form onSubmit={handleSubmit(hookPrediction.onSubmit)}>
                        <Grid container justifyContent={"center"}>
                            <Typography variant="h5" fontFamily={"sans-serif"} fontStyle={"normal"}>
                                Predicción de Éxito en MBA
                            </Typography>
                        </Grid>
                        <Grid container justifyContent={"center"}>
                            <TextField variant="filled" label="GMAT" margin="normal" type={"number"}
                                       inputProps={{min: 0}}
                                       sx={{width: "70%"}}
                                       {...register('gmat', {
                                           required: true,
                                           max: 800
                                       })}

                                       error={errors.gmat !== undefined}
                                       helperText={errorGmatMsg}
                            />
                        </Grid>
                        <Grid container justifyContent={"center"}>
                            <TextField variant="filled" label="GPA" margin="normal" type={"number"}
                                       inputProps={{step: 0.1, min: 0}}
                                       sx={{width: "70%"}}
                                       {...register('gpa', {
                                           required: true,
                                           min: 0
                                       })}
                                       error={errors.gpa !== undefined}
                                       helperText={errors.app_type?.type === 'required' ? 'Por favor ingrese este campo' : ''}
                            />
                        </Grid>
                        <Grid container justifyContent={"center"}>
                            <TextField variant="filled" label="Experiencia Laboral" margin="normal"
                                       sx={{width: "70%"}}
                                       inputProps={{min: 0}} type={"number"}
                                       {...register('wk_xp', {
                                           required: true,
                                           min: 0,
                                           valueAsNumber: true
                                       })}
                                       error={errors.wk_xp !== undefined}
                                       helperText={errors.wk_xp?.type === 'required' ? 'Por favor ingrese este campo' : ''}
                            ></TextField>

                        </Grid>
                        <Grid container justifyContent={"center"}>
                            <TextField variant="filled" label="Tipo de MBA" margin="normal" type={"number"}
                                       sx={{width: "70%"}} inputProps={{min: 0}}
                                       {...register('app_type', {
                                           required: true,
                                           min: 0
                                       })}
                                       error={errors.app_type !== undefined}
                                       helperText={errors.app_type?.type === 'required' ? 'Por favor ingrese este campo' : ''}
                            />

                        </Grid>
                        <Grid container justifyContent={"space-around"} sx={{mt: 3}}>
                            <Grid item>
                                <Button variant="contained" size="large" onClick={onclear}>Limpiar</Button>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" size="large" type="submit">Predecir</Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Box>
        </CompCoverPage>
    );
}
